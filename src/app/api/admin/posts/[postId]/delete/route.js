import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';

const deletePost = async (_request, context) => {
  try {
    const { postId } = await context.params;
    const post = await Post.find({ _id: postId });

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    await Post.deleteOne({ _id: postId });
    return NextResponse.json(
      { message: 'Success delete post' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete post handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const DELETE = withDB(withAuth(deletePost, ['admin']));
