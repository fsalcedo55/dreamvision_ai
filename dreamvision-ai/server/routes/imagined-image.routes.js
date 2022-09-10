const router = require("express").Router();
const LocalStorage = require("node-localstorage").LocalStorage;
const fileUploader = require("../config/cloudinary.setup.js");

const stability = require("stability-ts");

const mongoose = require("mongoose");
const User = require("../models/User.model");
const Session = require("../models/Session.model");

// const isLoggedOut = require('../middleware/isLoggedOut');
// const isLoggedIn = require('../middleware/isLoggedIn');

router.post("/saveImaginedImage", async (req, res) => {
  const localStoragePath = new LocalStorage("./scratch")._location;
  const { userPrompt } = req.body;
  const { userId } = req.body.userId;

  const api = stability.generate({
    prompt: `${userPrompt}`,
    apiKey: process.env.DREAMSTUDIO_API_KEY,
    outDir: localStoragePath,
  });

  api.on("image", async ({ buffer, filePath }) => {
    try {
      const pathToImageInCloudinary = await fileUploader.uploader.upload(
        filePath
      );

      const preparedUserId = mongoose.Types.ObjectId(userId);

      const user = await User.findByIdAndUpdate(
        preparedUserId,
        {
          $push: { imaginedPics: pathToImageInCloudinary.url },
        },
        { new: true }
      );
      return res.status(201).json({ success: true, user });
    } catch (err) {}
  });

  api.on("end", (data) => {
    console.log("Generating Complete", data);
  });
});

module.exports = router;
