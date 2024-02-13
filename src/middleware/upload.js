
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dbenalctk",
  api_key: "855486292655989",
  api_secret: "erL_0uvedAKikbNgdV-W9lPywzo",
});

const upload = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_large(
      file,
      {
        resource_type: "video",
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      }
    );
  });
};

export default upload;
