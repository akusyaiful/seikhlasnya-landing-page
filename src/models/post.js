import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      default: 'Seikhlasnya Admin',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnailPic: {
      type: String,
      required: false,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
