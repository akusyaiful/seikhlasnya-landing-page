import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Organization } from '@/models/organization';
import { NextResponse } from 'next/server';

const updateOrganization = async (request, context) => {
  try {
    const { organizationId } = await context.params;
    const { name, description, logoPic, address } = await request.json();

    let uploadResponse;

    if (logoPic) {
      uploadResponse = await cloudinary.uploader.upload(logoPic, {
        folder: 'seikhlasnya-app',
      });
    }

    const updatedOrganization = await Organization.findByIdAndUpdate(
      organizationId,
      {
        name: name,
        description: description,
        logoPic: uploadResponse?.secure_url,
        address: address,
      }
    );

    if (!updatedOrganization) {
      return NextResponse.json(
        { message: 'Organization not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Succes update organization',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update organization handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const PATCH = withDB(withAuth(updateOrganization, ['admin']));
