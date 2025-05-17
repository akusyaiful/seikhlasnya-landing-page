import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';

const updatePost = async (request, context) => {
  try {
    const { postId } = await context.params;
    const { author, title, content, thumbnailPic } = await request.json();

    let uploadedUrl;

    if (thumbnailPic) {
      const uploadResponse = await cloudinary.uploader.upload(thumbnailPic, {
        folder: 'seikhlasnya-app',
      });
      uploadedUrl = uploadResponse.secure_url;
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, {
      title: title,
      content: content,
      thumbnailPic: uploadedUrl,
      author: author,
    });

    if (!updatedPost) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'Success update post',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update post handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const PATCH = withDB(withAuth(updatePost, ['admin']));
