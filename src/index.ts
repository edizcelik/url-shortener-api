import cors from "cors";
import express from "express";
import morganBody from "morgan-body";
import { connectToDB } from "./db";
import env from "../config/env";
import shortUrlRouter from "./shorturl/shorturl.router";
import ShortUrlModel from "./shorturl/shorturl.model";

const PORT = env.get("PORT");
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

morganBody(app);

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  const urls = await ShortUrlModel.find({});
  res.render("index", { urls });
});

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
  await connectToDB();
  app.use("/api/shorturl", shortUrlRouter);
});
