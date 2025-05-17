import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Donation } from '@/models/donation';
import { NextResponse } from 'next/server';
import '@/models/organization';
import '@/models/user';

const getDonations = async (request, _context, user) => {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || 10;
    const skip = (page - 1) * limit;

    const donations = await Donation.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('organizationId', 'name');

    const totalData = await Donation.countDocuments();
    const totalPages = Math.ceil(totalData / limit);

    return NextResponse.json(
      {
        donations: donations.map((donation) => ({
          id: donation._id,
          amount: donation.amount,
          payment: donation.payment,
          createdAt: donation.createdAt,
          status: donation.status,
          userId: donation.userId,
          organization: {
            id: donation.organizationId._id,
            name: donation.organizationId.name,
          },
        })),
        pagination: {
          totalData,
          totalPages,
          currentPage: Number(page),
          limit: Number(limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get donations handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getDonations, ['user']));
