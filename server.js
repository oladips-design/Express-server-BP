const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log("Welcome");
  res.status(200).json({ status: true });
});

// listen to server with port
app.listen(port, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log(`Server running on port ${port}`);
});
