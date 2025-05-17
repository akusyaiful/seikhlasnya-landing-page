import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Donation } from '@/models/donation';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';

const updateDonationStatus = async (request, context) => {
  const allowedPaymentStatus = ['pending', 'paid', 'failed'];
  try {
    const { donationId } = await context.params;
    const { paymentStatus } = await request.json();

    if (!allowedPaymentStatus.includes(paymentStatus)) {
      return NextResponse.json({ message: 'Status invalid' }, { status: 400 });
    }

    const updatedDonation = await Donation.findByIdAndUpdate(donationId, {
      paymentStatus,
    });

    if (!updatedDonation) {
      return NextResponse.json(
        { message: 'Donation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Success update donation status',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const PATCH = withDB(withAuth(updateDonationStatus, ['admin']));
