const express = require("express");
const app = express();

app.all("/*", (req, res) => {
  res.status(200).send("true");
});

app.listen(8080);
module.exports = app;
