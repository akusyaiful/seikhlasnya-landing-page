import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';

const getUsers = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    const skip = (page - 1) * limit;

    const users = await User.find({ role: 'user' })
      .skip(skip)
      .limit(limit);
    const totalData = await User.countDocuments({ role: 'user' });
    const totalPages = Math.ceil(totalData / limit);

    return NextResponse.json(
      {
        users: users.map((user) => ({
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          profilePic: user.profilePic,
          totalDonations: 0,
          totalDonationAmount: 0,
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
    console.error('Get users handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getUsers, ['admin']));
