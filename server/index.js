import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/UploadRoutes.js";

dotenv.config();

const app = express();
const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGOOSE_URL).then(() => {
  console.log("Connected to db");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`db active on ${process.env.PORT}`);
});
