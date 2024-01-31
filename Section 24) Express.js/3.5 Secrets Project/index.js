//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var userIsAuthorized = false;

function checkPassword(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming"){
    userIsAuthorized = true;
  }
  next();
}

app.use(bodyParser.urlencoded( {extended : true } ));

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/check", (req, res) => {
  if (userIsAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});