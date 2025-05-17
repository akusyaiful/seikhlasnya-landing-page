import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
    payment: {
      paymentUrl: {
        type: String,
        default: null,
      },
      paymentMethod: {
        type: String,
        default: null,
      },
      paidAt: {
        type: String,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Donation =
  mongoose.models.Donation || mongoose.model('Donation', donationSchema);

export { Donation };
