const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  studentId: String,
  dob: String,
  mobileNumber: String,
});

module.exports = mongoose.model("User", UserSchema);
