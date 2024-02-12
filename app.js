import express from "express";
import cors from "cors";
import { videoRouter } from "./src/routes/video.routes.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    Credential: true,
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/video", videoRouter);


export default app;
