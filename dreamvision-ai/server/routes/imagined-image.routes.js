const router = require('express').Router();
const LocalStorage = require('node-localstorage').LocalStorage;
const fileUploader = require('../config/cloudinary.setup.js');

const stability = require('stability-ts');

const mongoose = require('mongoose');
const User = require('../models/User.model');
const Session = require('../models/Session.model');

// const isLoggedOut = require('../middleware/isLoggedOut');
// const isLoggedIn = require('../middleware/isLoggedIn');

router.post('/saveImaginedImage', async (req, res) => {
  const localStoragePath = new LocalStorage('./scratch')._location;

  const { userPrompt } = req.body;

  const { userId } = req.body.userId;

  const api = stability.generate({
    prompt: `${userPrompt}`,
    apiKey: process.env.DREAMSTUDIO_API_KEY,
    outDir: localStoragePath,
  });

  api.on('image', async ({ buffer, filePath }) => {
    try {
      const pathToImageInCloudinary = await fileUploader.uploader.upload(
        filePath
      );

      const preparedUserId = mongoose.Types.ObjectId(userId);
      const user = await User.findByIdAndUpdate(
        preparedUserId,
        {
          $push: {
            imaginedPics: {
              picUrl: pathToImageInCloudinary.url,
              prompt: userPrompt,
            },
          },
        },
        { new: true }
      );
      return res.status(201).json({ success: true, user });
    } catch (err) {
      console.log({ err });
    }
  });

  api.on('end', (data) => {
    console.log('Generating Complete', data);
  });
});

router.get('/getAllTheEntities', async (req, res) => {
  const users = await User.find({})
    .then((users) => users)
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'users were not found',
        err,
      });
    });

  const usersAndImages = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].imaginedPics.length; j++) {
      usersAndImages.push({
        username: users[i].username,
        imaginedPics: {
          picUrl: users[i].imaginedPics[j].picUrl,
          prompt:
            users[i].imaginedPics[j].prompt[0].toUpperCase() +
            users[i].imaginedPics[j].prompt.slice(1),
        },
      });
    }
  }
  res.status(200).json({ success: true, usersAndImages });
});

router.get('/getAllImagesOfThisUser/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });
    const userImages = user.imaginedPics;
    res.status(200).json({ success: true, userImages });
  } catch (err) {
    res.json({
      success: false,
      message: 'Something went wrong with the user and its images',
    });
  }
});

module.exports = router;
