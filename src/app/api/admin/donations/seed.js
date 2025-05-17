// Using relatif path for import on seed script
import { connectDB } from '../../../../libs/db.js';
import { Donation } from '../../../..//models/donation.js';

const seed = async () => {
  await connectDB();

  const dummyDonations = [
    {
      amount: 60000,
      userId: '680efe7d413c6c70e557accc',
      organizationId: '680532576c3ab670d1ce243a',
      paymentStatus: 'paid',
      paymentMethod: 'gopay',
      paymentId: 'MIDTRANS_ORDER_016',
    },
  ];

  try {
    // await Donation.deleteMany();
    await Donation.insertMany(dummyDonations);
    console.log('Dummy donations inserted!');
    process.exit();
  } catch (error) {
    console.error('Error seeding donation data:', error);
    process.exit(1);
  }
};

seed();
