import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  host: "localhost",
  user: "postgres",
  password: "123456",
  port: 5432,
  database: "permalist"
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items = [];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  try {
    const itemToAdd = req.body.newItem;
    await db.query("INSERT INTO items (title) VALUES($1)", [itemToAdd]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  try {
    const itemToUpdate = req.body;
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [itemToUpdate.updatedItemTitle, itemToUpdate.updatedItemId]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  try {
    await db.query("DELETE FROM items WHERE id = $1", [req.body.deleteItemId]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
