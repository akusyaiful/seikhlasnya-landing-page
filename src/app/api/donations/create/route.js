import { snap } from '@/libs/midtrans';
import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Donation } from '@/models/donation';
import { NextResponse } from 'next/server';

const createTransaction = async (request, _context, user) => {
  try {
    const { organizationId, amount } = await request.json();

    if (!organizationId || !amount) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const newDonation = await Donation.create({
      amount,
      userId: user.id,
      organizationId,
    });

    if (newDonation) {
      await newDonation.save();

      let parameter = {
        transaction_details: {
          order_id: newDonation._id,
          gross_amount: amount,
        },
        credit_card: {
          secure: true,
        },
      };

      const payment = await snap.createTransaction(parameter);

      if (payment) {
        newDonation.payment.paymentUrl = payment.redirect_url;

        await newDonation.save();

        return NextResponse.json(
          {
            donation: {
              id: newDonation._id,
            },
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: 'Failed to create donation' },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: 'Failed to create donation' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Create transaction handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(withAuth(createTransaction, ['user']));
