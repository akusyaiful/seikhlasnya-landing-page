import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';

const createPost = async (request) => {
  try {
    const { title, content, thumbnailPic, author } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { message: 'Title & content fields are required' },
        { status: 400 }
      );
    }

    let uploadedUrl;

    if (thumbnailPic) {
      const uploadResponse = await cloudinary.uploader.upload(thumbnailPic, {
        folder: 'seikhlasnya-app',
      });
      uploadedUrl = uploadResponse.secure_url;
    }

    const newPost = await Post.create({
      title,
      content,
      thumbnailPic: uploadedUrl,
      author,
    });

    if (newPost) {
      await newPost.save();

      return NextResponse.json(
        {
          message: 'Success create post',
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to create post' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Create post handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(withAuth(createPost, ['admin']));
