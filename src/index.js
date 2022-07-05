// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server! neco tady budu davat" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});