import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const Upload = mongoose.model("Upload", uploadSchema);
export default Upload;
