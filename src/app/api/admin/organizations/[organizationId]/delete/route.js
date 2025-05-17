import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Organization } from '@/models/organization';
import { NextResponse } from 'next/server';

const deleteOrganization = async (_request, context) => {
  try {
    const { organizationId } = await context.params;
    const organization = await Organization.find({ _id: organizationId });

    if (!organization) {
      return NextResponse.json(
        { message: 'Organization not found' },
        { status: 404 }
      );
    }
    await Organization.deleteOne({ _id: organizationId });
    return NextResponse.json(
      { message: 'Organization deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete organization handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const DELETE = withDB(withAuth(deleteOrganization, ['admin']));
