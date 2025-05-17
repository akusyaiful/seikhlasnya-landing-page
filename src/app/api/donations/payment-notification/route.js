import { snap } from '@/libs/midtrans';
import { withDB } from '@/middleware/db';
import { Donation } from '@/models/donation';
import { NextResponse } from 'next/server';

const postPaymentNotification = async (request) => {
  try {
    const notificationJson = await request.json();
    const statusResponse = await snap.transaction.notification(
      notificationJson
    );

    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;

    console.log(
      `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`
    );

    if (transactionStatus == 'capture') {
      if (fraudStatus == 'challenge') {
        await Donation.findByIdAndUpdate(orderId, {
          status: 'failed',
        });
      } else if (fraudStatus == 'accept') {
        await Donation.findByIdAndUpdate(orderId, {
          status: 'paid',
        });
      }
    } else if (transactionStatus == 'settlement') {
      await Donation.findByIdAndUpdate(orderId, {
        status: 'paid',
      });
    } else if (transactionStatus == 'deny') {
      await Donation.findByIdAndUpdate(orderId, {
        status: 'failed',
      });
    } else if (transactionStatus == 'cancel' || transactionStatus == 'expire') {
      await Donation.findByIdAndUpdate(orderId, {
        status: 'failed',
      });
    } else if (transactionStatus == 'pending') {
      await Donation.findByIdAndUpdate(orderId, {
        status: 'pending',
      });
    }

    return NextResponse.json(
      {
        message: 'Success update payment status',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Create transaction handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(postPaymentNotification);
