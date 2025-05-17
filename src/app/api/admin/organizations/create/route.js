import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { Organization } from '@/models/organization';
import { NextResponse } from 'next/server';

const createOrganization = async (request) => {
  try {
    const { name, address, logoPic, description } = await request.json();

    if (!name || !address || !description) {
      return NextResponse.json(
        { message: 'Name, address, & address fields are required' },
        { status: 400 }
      );
    }

    let uploadedUrl;

    if (logoPic) {
      const uploadResponse = await cloudinary.uploader.upload(logoPic, {
        folder: 'seikhlasnya-app',
      });
      uploadedUrl = uploadResponse.secure_url;
    }

    const organization = await Organization.findOne({ name });
    if (organization) {
      return NextResponse.json(
        { message: 'Organization already exists' },
        { status: 400 }
      );
    }

    const newOrganization = await Organization.create({
      name,
      address,
      logoPic: uploadedUrl,
      description,
    });

    if (newOrganization) {
      await newOrganization.save();

      return NextResponse.json(
        {
          organization: {
            id: newOrganization._id,
            name: newOrganization.name,
            address: newOrganization.address,
            logoPic: newOrganization.logoPic,
            description: newOrganization.description,
          },
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to create organization' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Create organization handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(withAuth(createOrganization, ['admin']));
