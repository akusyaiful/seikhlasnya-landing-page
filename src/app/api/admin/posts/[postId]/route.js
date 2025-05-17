import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';

const getPostDetail = async (_request, context) => {
  try {
    const { postId } = await context.params;

    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        organization: {
          id: post._id,
          title: post.title,
          content: post.content,
          author: post.author,
          thumbnailPic: post.thumbnailPic,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get post handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getPostDetail, ['admin']));
