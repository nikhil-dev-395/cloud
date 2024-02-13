
import videoModel from "../models/video.models.js";
import upload from "../middleware/upload.js";
import fs from "fs";

const upload_videos = async (req, res) => {
  try {
    const { title } = req.body;
    const file = req.file.path;

    const cloudinary_upload = await upload(file);

    if (!cloudinary_upload.secure_url || !cloudinary_upload.public_id) {
      throw new Error("Cloudinary upload failed");
    }

    // Delete the local file after successful Cloudinary upload
    fs.unlinkSync(file);

    const result = await videoModel.create({
      title,
      url: cloudinary_upload.secure_url,
      public_id: cloudinary_upload.public_id,
    });

    console.log(result.url);
    res.status(200).json({
      message: "Video uploaded successfully",
      videoId: result._id,
    });
  } catch (error) {
    console.error("Error occurred at uploading videos:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};

export { upload_videos };
