const express = require("express");
const momgoose = require("mongoose");

momgoose.connect();
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
