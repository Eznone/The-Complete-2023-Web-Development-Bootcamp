import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;


app.use(morgan("tiny"));
app.use(bodyParser.urlencoded( { extended : true} ));

function bandNameGenerator(req, res) {
  console.log(req.body);
  return req.body["street"] + req.body["pet"];
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/submit", (req, res) => {
  var bandName = bandNameGenerator(req, res);
  res.send(`<h1>Your band name is:<h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

