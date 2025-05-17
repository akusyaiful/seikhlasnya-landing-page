import { connectDB } from '@/libs/db';
import { NextResponse } from 'next/server';

export function withDB(handler) {
  return async (request, context) => {
    try {
      await connectDB();
      return await handler(request, context);
    } catch (error) {
      console.error('Database connection error:', error);
      return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 }
      );
    }
  };
}
