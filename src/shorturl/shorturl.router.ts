import { Router } from "express";
import { createShortUrl, findShortUrl } from "./shorturl.controller";
// import ShortUrlModel from "./shorturl.model";

const shortUrlRouter = Router();

shortUrlRouter.post("/", createShortUrl);
// shortUrlRouter.get("/drop-collection", async (req, res) => {
//   await ShortUrlModel.db.collection("shorturls").drop();
//   res.json({dropped: true})
// });
shortUrlRouter.get("/:id", findShortUrl);

export default shortUrlRouter;
