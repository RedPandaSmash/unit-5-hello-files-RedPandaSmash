const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/2", async (req, res) => {
  res.sendFile(__dirname + "/2.html");
});

app.get("/3", async (req, res) => {
  res.sendFile(__dirname + "/3.html");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
