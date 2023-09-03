const connect = require("./config/db");
const app = require("./index.js");
app.listen(4500, async () => {
  try {
    await connect();
    console.log("listening on Port 4500");
  } catch (err) {
    throw new Error("Error in establishing connection");
  }
});
