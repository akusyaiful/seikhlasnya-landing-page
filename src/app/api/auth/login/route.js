import { User } from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/utils/auth';
import { withDB } from '@/middleware/db';
import { cookies } from 'next/headers';

const login = async (request) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    if (user.role !== 'user') {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    const cookiesStore = await cookies();

    generateToken(cookiesStore, user._id);

    return NextResponse.json(
      {
        message: 'Success login user',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(login);
