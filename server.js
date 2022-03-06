const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

// static files
app.use(express.static("public"));

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
