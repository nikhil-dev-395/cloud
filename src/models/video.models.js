import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:String,
    url:String
});


const videoModel = mongoose.model("video",videoSchema);

export default videoModel;