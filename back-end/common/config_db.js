const mongoose = require("mongoose");

//connect to mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));
module.exports = mongoose;
