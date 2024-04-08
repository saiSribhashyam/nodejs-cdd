const express = require("express");
const app = -express();

const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.listen(8090, () => {
  console.log("listening on port 8090");
});
