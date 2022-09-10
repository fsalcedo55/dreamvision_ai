const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [false, 'Password is required'],
  },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  // profilePic: { type: String, required: false },
  imaginedPics: [{ type: String, required: false }],
});

userSchema.plugin(require('mongoose-autopopulate'));
const User = model('User', userSchema);
module.exports = User;
