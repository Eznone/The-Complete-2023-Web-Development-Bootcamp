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

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let visited_countries = [];
  result.rows.forEach((country) => {
    visited_countries.push(country.country_code);
  });
  return visited_countries;
}

async function addCountry(country) {
  try {
    const newCountry = await db.query("SELECT * FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';", [country.toLowerCase()]);
    const countryCode = newCountry.rows[0]["country_code"];
    const countryName = newCountry.rows[0]["country_name"]
    console.log("Country to be registered: " + countryName);
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
    } catch(error) {
      console.log(error.detial);
      let visited_countries = await checkVisisted();
      let data = {
        countries: visited_countries,
        total: visited_countries.length,
        error: "Country already registered, please try again.", 
      }
      return(data);
    }
  } catch(error) {
    console.log(error.detial);
    let visited_countries = await checkVisisted();
    let data = {
      countries: visited_countries,
      total: visited_countries.length,
      error: "Country name does not exist, please try again.", 
    }
    return(data);
  }
}

app.get("/", async (req, res) => {
  let visited_countries = await checkVisisted();
  console.log(visited_countries);
  let data = {
    countries: visited_countries,
    total: visited_countries.length
  };
  res.render("./index.ejs", data);
});

app.post("/add", async (req, res) => {
  let data = await addCountry(req.body.country);
  if (data?.error !== undefined) {
    console.log(data);
    res.render("./index.ejs", data);
  } else {
    res.redirect("/");
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
