import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const logout = async () => {
  const cookiesStore = await cookies();

  cookiesStore.set('jwt', '', {
    maxAge: 0,
  });

  return NextResponse.json(
    {
      message: 'Success logout admin',
    },
    { status: 200 }
  );
};

export const POST = logout;
