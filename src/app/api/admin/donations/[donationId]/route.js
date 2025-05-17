import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Donation } from '@/models/donation';
import { Organization } from '@/models/organization';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';

const getDonationDetail = async (_request, context) => {
  try {
    const { donationId } = await context.params;

    const donation = await Donation.findById(donationId);
    if (!donation) {
      return NextResponse.json(
        { message: 'Donation not found' },
        { status: 404 }
      );
    }

    const user = await User.findById(donation.userId);
    const organization = await Organization.findById(donation.organizationId);

    return NextResponse.json(
      {
        donation: {
          id: donation._id,
          amount: donation.amount,
          status: donation.status,
          payment: donation.payment,
          createdAt: donation.createdAt,
          user: user
            ? {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
              }
            : null,
          organization: organization
            ? {
                id: organization._id,
                name: organization.name,
                logo: organization.logo,
                description: organization.description,
                address: organization.address,
              }
            : null,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get donations handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const GET = withDB(withAuth(getDonationDetail, ['admin']));
