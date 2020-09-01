const express = require("express");
const app = express();

app.get("/", (req, res) => {
  app.send({ try: "you will get" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
