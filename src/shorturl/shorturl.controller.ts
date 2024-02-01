import { Request, Response } from "express";
import ShortUrlModel from "./shorturl.model";
import { isValidURL } from "../util/url.utils";

export async function createShortUrl(
  req: Request<{}, {}, { url: string }>,
  res: Response
) {
  try {
    if (!isValidURL(req.body.url)) {
      throw new Error("invalid url");
    }

    const shortUrl = await ShortUrlModel.findOne({
      original_url: req.body.url,
    });

    if (shortUrl) {
      return res.json({
        data: shortUrl.toJSON(),
      });
    }

    const newShortUrl = await ShortUrlModel.create({
      original_url: req.body.url,
    });

    res.json(newShortUrl.toJSON());
  } catch (error: any) {
    res.status(400);
    res.json({ error: error.message });
  }
}

export async function findShortUrl(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const shortUrl = await ShortUrlModel.findOneAndUpdate(
      {
        short_url: req.params.id,
      },
      { $inc: { hit_count: 1 } },
      { new: true }
    );

    if (!shortUrl) {
      throw new Error("Not found.");
    }

    res.redirect(shortUrl.original_url);
  } catch (error: any) {
    res.status(404);
    res.json({
      message: error.message,
    });
  }
}
