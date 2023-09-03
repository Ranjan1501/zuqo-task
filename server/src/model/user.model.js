const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    mobile_no: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("user", userSchema);
