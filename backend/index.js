const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PROT = 3000;

const corsOptions = {
  origin: "http://localhost:8081",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/getSentenceData", (req, res) => {
  const data = fs.readFileSync("./sentenceFile.json");
  const dataJson = JSON.parse(data);
  const dataArr = [];
  const dataLen = Object.keys(dataJson).length;

  for (let i = 0; i < 120; i++) {
    const randomIndex = Math.round(Math.random() * dataLen);
    dataArr.push(dataJson[randomIndex]);
  }

  res.send(dataArr);
});

app.listen(PROT, () => {
  console.log(`Server running on port ${PROT}`);
});
