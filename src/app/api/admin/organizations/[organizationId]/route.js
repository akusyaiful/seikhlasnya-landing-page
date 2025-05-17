import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Organization } from '@/models/organization';
import { NextResponse } from 'next/server';

const getDonationDetail = async (_request, context) => {
  try {
    const { organizationId } = await context.params;

    const organization = await Organization.findById(organizationId);
    if (!organization) {
      return NextResponse.json(
        { message: 'Organization not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        organization: {
          id: organization._id,
          name: organization.name,
          logoPic: organization.logoPic,
          description: organization.description,
          address: organization.address,
          status: organization.status,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get donation handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getDonationDetail, ['admin']));
