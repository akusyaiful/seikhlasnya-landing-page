import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';

const updateProfile = async (request, _context, user) => {
  try {
    const { fullName, profilePic, role } = await request.json();

    let uploadResponse;

    if (profilePic) {
      uploadResponse = await cloudinary.uploader.upload(profilePic, {
        folder: 'seikhlasnya-app',
      });
    }

    await User.findByIdAndUpdate(
      user._id,
      {
        fullName: fullName,
        profilePic: uploadResponse?.secure_url,
        role: role,
      },
      { new: true }
    );

    return NextResponse.json(
      {
        message: 'Success update profile',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const PATCH = withDB(withAuth(updateProfile, ['user']));
