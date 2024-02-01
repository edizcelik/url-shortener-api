import { Router } from "express";
import { createShortUrl, findShortUrl } from "./shorturl.controller";
import validate from "../middleware/validateResource";
import { createShortUrlSchema } from "./shorturl.validationSchema";

const shortUrlRouter = Router();

shortUrlRouter.post("/", validate(createShortUrlSchema), createShortUrl);
shortUrlRouter.get("/:id", findShortUrl);
// shortUrlRouter.get("/drop-collection", async (req, res) => {
//   await ShortUrlModel.db.collection("shorturls").drop();
// });

export default shortUrlRouter;
