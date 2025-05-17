import { User } from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import {
  generateToken,
  generateVerificationToken,
  sendVerificationTokenEmail,
} from '@/utils/auth';
import { withDB } from '@/middleware/db';
import { cookies } from 'next/headers';
import { VERIFICATION_TOKEN_EXPIRES_MS } from '@/constants/auth';

const register = async (request) => {
  try {
    const { email, password, fullName } = await request.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: 'User already exist' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const verificationToken = generateVerificationToken();

    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
      role: 'user',
      verificationToken,
      verificationTokenExpiresAt: new Date(
        Date.now() + VERIFICATION_TOKEN_EXPIRES_MS
      ),
    });

    if (newUser) {
      await newUser.save();

      const cookiesStore = await cookies();

      generateToken(cookiesStore, newUser._id);

      await sendVerificationTokenEmail({ verificationToken, fullName, email });

      return NextResponse.json(
        {
          message: 'Success register user',
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to register user' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Register handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(register);
