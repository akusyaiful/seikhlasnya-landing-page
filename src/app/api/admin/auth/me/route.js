import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { NextResponse } from 'next/server';

const getMe = async (_request, _context, user) => {
  try {
    return NextResponse.json(
      {
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          profilePic: user.profilePic,
          role: user.role,
          isVerified: user.isVerified,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get me handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getMe, ['admin']));
