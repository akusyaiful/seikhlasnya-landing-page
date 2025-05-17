import { User } from '@/models/user';
import { verifyToken } from '@/utils/auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function withAuth(handler, allowedRoles) {
  return async (request, context) => {
    try {
      const cookiesStore = await cookies();
      const token = cookiesStore.get('jwt')?.value;

      if (!token) {
        return NextResponse.json(
          { message: 'Unauthorized user' },
          { status: 401 }
        );
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        return NextResponse.json(
          { message: 'Unauthorized user' },
          { status: 401 }
        );
      }

      const user = await User.findById(decoded.userId).select('-password');
      if (!user) {
        return NextResponse.json(
          { message: 'Unauthorized user' },
          { status: 401 }
        );
      }

      if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return NextResponse.json(
          { message: 'Forbidden access' },
          { status: 403 }
        );
      }

      return await handler(request, context, user);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 }
      );
    }
  };
}
