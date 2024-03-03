import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client ({
  host: "localhost",
  port: 5432,
  database: "world",
  user: "postgres",
  password: "123456"
});

db.connect();

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let visited_countries = [];
  result.rows.forEach((country) => {
    visited_countries.push(country.country_code);
  });
  console.log(visited_countries);
  let data = {
    countries: visited_countries,
    total: visited_countries.length
  };
  db.end();
  res.render("./index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
