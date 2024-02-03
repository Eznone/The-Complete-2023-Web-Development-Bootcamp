import express from 'express';

const listTitle = [];
const listDescription = [];

const app = express();
const port = 3000;
const year = getYear();

app.use(express.urlencoded( {extended : true} ));
app.use(express.static("public"));

function getYear() {
  let year = new Date().getFullYear();
  return year;
}

app.get("/", (req, res) => {
  let data = {
    listTitle : listTitle,
    listDescription : listDescription,
    year: year,
  }
  res.render("blogs.ejs", data);
});

app.get("/form", (req, res) => {
  let data = {
    year: year,
  }
  res.render("form.ejs", data);
});

app.post("/submit", (req, res) => {
  listTitle.push(req.body["title"]);
  listDescription.push(req.body["text"]);
  console.log(req.body);
  res.redirect('/');
});



app.listen(port, () => {
  console.log("Now listening on port " + port);
});