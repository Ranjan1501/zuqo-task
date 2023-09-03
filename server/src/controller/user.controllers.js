const User = require("../model/user.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const offset = (page - 1) * size;
    // const users = await User.find({}).skip(offset).limit(size).lean().exec();
    const users = await User.find({}).lean().exec();
    const totalPage = Math.ceil((await User.find().countDocuments()) / size);
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: "failed" });
  }
});

module.exports = router;
