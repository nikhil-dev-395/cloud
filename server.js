import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import app from "./app.js";
import connectDB from "./src/database/connectDB.js";
const port = process.env.PORT || 6969;

connectDB().then(() =>
  app.listen(port, () => {
    console.log("server is listening on " + port);
  })
);
