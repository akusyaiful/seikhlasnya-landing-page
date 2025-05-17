import { User } from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { withDB } from '@/middleware/db';

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

    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
      role: 'admin',
      isVerified: true,
    });

    if (newUser) {
      await newUser.save();

      return NextResponse.json(
        {
          message: 'Success create admin',
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to create admin' },
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
