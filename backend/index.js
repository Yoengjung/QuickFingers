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

  for (let i = 0; i < dataLen; i++) {
    const randomIndex = Math.round(Math.random() * dataLen);
    dataArr.push(dataJson[randomIndex]);
  }

  res.send(dataArr);
});

app.get("/getParagraphData", (req, res) => {
  const data = fs.readFileSync("./paragraphFile.json");
  const dataJson = JSON.parse(data);
  const dataLen = Object.keys(dataJson).length;
  const randomIndex = Math.round(Math.random() * dataLen);
  const selectedData = dataJson[randomIndex];

  res.send(selectedData);
});

app.get("/getWordData", (req, res) => {
  const data = fs.readFileSync("./wordFile.json");
  const dataJson = JSON.parse(data);
  const dataLen = Object.keys(dataJson).length;
  const selectedData = [];

  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.round(Math.random() * dataLen) - 1;
    selectedData.push(dataJson[randomIndex]);
  }

  res.send(selectedData);
});

app.listen(PROT, () => {
  console.log(`Server running on port ${PROT}`);
});
