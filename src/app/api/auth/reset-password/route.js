import { withDB } from '@/middleware/db';
import { User } from '@/models/user';
import dayjs from 'dayjs';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { OTP_EXPIRY_MINUTES } from '@/constants/auth';

const resetPassword = async (request) => {
  try {
    return NextResponse.json(
      { message: 'Verification Failed' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Verify OTP handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(resetPassword);
