import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { User } from '@/models/user';
import dayjs from 'dayjs';
import { NextResponse } from 'next/server';

const verifyAccount = async (request, _context, user) => {
  try {
    const { verificationToken } = await request.json();

    if (!verificationToken) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const isTokenExpired = dayjs().isAfter(
      dayjs(user.verificationTokenExpiresAt)
    );

    if (isTokenExpired) {
      return NextResponse.json(
        { message: 'Verification Failed' },
        { status: 400 }
      );
    }

    if (verificationToken !== user.verificationToken) {
      return NextResponse.json(
        { message: 'Verification Failed' },
        { status: 400 }
      );
    }

    await User.findByIdAndUpdate(
      user._id,
      {
        isVerified: true,
        verificationToken: null,
        verificationTokenExpiresAt: null,
      },
      { new: true }
    );

    return NextResponse.json(
      {
        message: 'Verify Account Success',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verify OTP handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(withAuth(verifyAccount, ['user']));
