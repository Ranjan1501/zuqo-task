const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;
const connect = () => {
  console.log("uri", URI);
  return mongoose.connect(URI, {
    useNewUrlParser: true,
  });
};
module.exports = connect;
