import multer from "multer";

const storage = multer.diskStorage({
    destination: './uploads/', // Choose your destination folder
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original file name
    },
  });

  const uploadMulter = multer({ storage: storage });

  export default uploadMulter;

