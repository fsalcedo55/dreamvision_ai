const router = require('express').Router();
const authRoutes = require('./auth.routes');
const imaginedImagesRoutes = require('./imagined-image.routes');

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.use('/auth', authRoutes);
router.use('/imagined-images', imaginedImagesRoutes);

module.exports = router;
