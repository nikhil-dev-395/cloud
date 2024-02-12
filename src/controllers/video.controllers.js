import videoModel from "../models/video.models.js";
import upload from "../middleware/upload.js";

const upload_videos = async (req, res) => {
  try {
    const { title } = req.body;

    const file = "./videos/vid.mp4"; // Update the correct file path

    const cloudinary_upload = await upload(file);

    const result = await videoModel.create({
      title,
      url: cloudinary_upload.secure_url,
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
