

import { upload_videos } from "../controllers/video.controllers.js";
import express from "express";
import uploadMulter from "../middleware/multer.Middleware.js"; // Adjust the path accordingly

const router = express.Router();

router.route("/upload_videos").post(uploadMulter.single("file"), upload_videos);

export { router as videoRouter };
