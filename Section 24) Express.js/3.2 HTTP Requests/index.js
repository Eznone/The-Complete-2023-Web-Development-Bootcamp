import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  /* console.log(req.rawHeaders); */
  /* res.send("Hello, World!"); */
  res.send("<h1> Hello, World! </h1>");
});

app.get("/about", (req, res) => {
  /* console.log(req.rawHeaders); */
  /* res.send("Hello, World!"); */
  res.send("<h1> About Me! </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> mrmediano.enzo@gmail.com </h1>");
});


app.listen(port, () => {
  console.log("Server has started on port " + port);
});

