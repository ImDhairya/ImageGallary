import {Router} from "express";
import uploadMiddleware from "../middlewares/MulterMiddlewares.js";
import Upload from "../modals/UploadModal.js";
const router = Router();

router.get("/api/get", async (req, res) => {
  const allPhotos = await Upload.find().sort({createdAt: "ascending"});
  res.status(200).send(allPhotos);
});

router.post("/api/save", uploadMiddleware.single("photo"), (req, res) => {
  console.log(req.file);

  const photo = req.file.filename;
  console.log(photo);
  Upload.create({photo})

    .then((data) => {
      console.log("Uploaded Successfully ");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});
export default router;
