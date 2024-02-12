import { upload_videos } from "../controllers/video.controllers.js";
import express from "express";
const router = express.Router();

router.route("/upload_videos").post(upload_videos)

export { router as videoRouter };
