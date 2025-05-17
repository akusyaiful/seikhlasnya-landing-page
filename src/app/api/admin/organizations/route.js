import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Organization } from '@/models/organization';
import { NextResponse } from 'next/server';

const getOrganizations = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || 10;
    const skip = (page - 1) * limit;

    const organizations = await Organization.find()
      .skip(skip)
      .limit(limit);

    const totalData = await Organization.countDocuments();
    const totalPages = Math.ceil(totalData / limit);

    return NextResponse.json(
      {
        organizations: organizations.map((organization) => ({
          id: organization._id,
          name: organization.name,
          logoPic: organization.logoPic,
          description: organization.description,
          address: organization.address,
          status: organization.status,
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
    console.error('Get organizations handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getOrganizations, ['admin']));
