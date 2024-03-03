import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";
const app = express();
const port = 3000;
const dbPwd = process.env.PWD;
var quiz;
let totalCorrect = 0;
const db = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "world",
  user: "postgres",
  password: dbPwd
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

db.connect();

db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.log("Error making query", err.stack);
  } else {
    quiz = res.rows;
    console.log(quiz);
  }
  db.end();
});


// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  console.log(isCorrect);
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  console.log(quiz);
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
