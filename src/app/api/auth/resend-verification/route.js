import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import '@/models/user';
import { NextResponse } from 'next/server';
import { User } from '@/models/user';
import {
  generateVerificationToken,
  sendVerificationTokenEmail,
} from '@/utils/auth';
import { VERIFICATION_TOKEN_EXPIRES_MS } from '@/constants/auth';

const resendVerification = async (_request, _context, user) => {
  try {
    const verificationToken = generateVerificationToken();

    await User.findByIdAndUpdate(
      user._id,
      {
        verificationToken,
        verificationTokenExpiresAt: new Date(
          Date.now() + VERIFICATION_TOKEN_EXPIRES_MS
        ),
      },
      { new: true }
    );

    await sendVerificationTokenEmail({
      verificationToken,
      fullName: user.fullName,
      email: user.email,
    });

    return NextResponse.json(
      {
        message: 'Resend verification success',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Send OTP handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(withAuth(resendVerification, ['user']));
