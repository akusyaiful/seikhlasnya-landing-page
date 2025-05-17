import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';

const getPosts = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find()
      .skip(skip)
      .limit(limit);

    const totalData = await Post.countDocuments();
    const totalPages = Math.ceil(totalData / limit);

    return NextResponse.json(
      {
        posts: posts.map((post) => ({
          id: post._id,
          title: post.title,
          content: post.content,
          author: post.author,
          thumbnailPic: post.thumbnailPic,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
        })),
        pagination: {
          totalData,
          totalPages,
          currentPage: Number(page),
          limit: Number(limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get posts handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getPosts, ['admin']));
