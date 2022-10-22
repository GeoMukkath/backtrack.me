const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const mongoURI =
  "mongodb+srv://admin:babablacksheep@cluster0.bsgv9cv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log("Mongo Instance connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to Mongo DB", err);
});

app.get("/", (req, res) => {
  res.send("Hi There!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
