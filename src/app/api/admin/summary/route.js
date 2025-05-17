import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Donation } from '@/models/donation';
import { NextResponse } from 'next/server';
import '@/models/organization';
import '@/models/user';

// TODO: Add filter by date
const getSummary = async () => {
  try {
    const totalDonationResult = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' },
        },
      },
    ]);
    const totalDonationAmount = totalDonationResult[0]?.total || 0;

    const totalDonationCount = await Donation.countDocuments();

    const totalDonor =
      (
        await Donation.aggregate([
          { $group: { _id: '$userId' } },
          { $count: 'total' },
        ])
      )[0]?.total || 0;

    const latestDonations = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('userId', 'email fullName')
      .populate('organizationId', 'name logoPic');

    return NextResponse.json(
      {
        summary: {
          totalDonationAmount,
          totalDonationCount,
          totalDonor,
          latestDonations: latestDonations.map((donation) => ({
            id: donation._id,
            amount: donation.amount,
            createdAt: donation.createdAt,
            status: donation.status,
            user: {
              id: donation.userId._id,
              email: donation.userId.email,
              fullName: donation.userId.fullName,
            },
            organization: {
              id: donation.organizationId._id,
              name: donation.organizationId.name,
              logoPic: donation.organizationId.logoPic,
            },
          })),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get summary handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getSummary, ['admin']));
