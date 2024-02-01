import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.get("/", (req, res) => {

  const today = new Date();
  const day = Date.getDay();

  let ini = "it's a weekday";
  let adv = "it's time to work hard!";

  if (day === 0 || day === 6) {
    ini = "it's a weekdend";
    adv = "time to take a break!";
  }

  res.render("index.ejs", {
    ini: day,
    adv: msg,
  });


});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});















app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})