import mongoose from "mongoose";
import { nanoid } from "nanoid";

export type ShortUrlDocument = mongoose.Document & {
  original_url: string;
};

const shortUrlSchema = new mongoose.Schema(
  {
    original_url: {
      type: String,
      required: true,
      unique: true,
    },
    short_url: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(11),
    },
    hit_count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ShortUrlModel = mongoose.model<ShortUrlDocument>(
  "ShortUrl",
  shortUrlSchema
);

export default ShortUrlModel;
