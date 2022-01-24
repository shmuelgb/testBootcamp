const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(cors());

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorage,
  limits: { fileSize: 1000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|JPG)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(null, true);
  },
});

app.post("/single", upload.single("image"), (req, res) => {
  try {
    console.log("file:", req.file);
    res.send("upload success");
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

app.listen(3001, () => console.log("Server started on port 3001"));
