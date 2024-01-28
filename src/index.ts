import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.post("/api/shorturl", (req: Request, res: Response) => {
  res.status(404)
  res.json({
    message: "This service is being developed."
  })
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
