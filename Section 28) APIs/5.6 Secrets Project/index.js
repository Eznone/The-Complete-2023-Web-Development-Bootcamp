import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    let result = await axios.get("https://secrets-api.appbrewery.com/random");
    let data = {
      secret: result.data.secret,
      user: result.data.username,
    }
    res.render("index.ejs", data);
  } catch (error) {
    console.log(error.message);
    let data = {
      secret: error.message,
      user: "error",
    }
    console.log(error.response.data);
    res.status(500);
    res.render("index.ejs", data);
  }
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
