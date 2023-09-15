const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    max: 50,
  },
  likedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);
