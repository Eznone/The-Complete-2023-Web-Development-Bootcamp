import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Eznone";
const yourPassword = "monkey";
const yourAPIKey = "36c354f1-b91f-4783-b97e-9210b33983f6";
const yourBearerToken = "2f8c316d-64fa-40bf-9282-08ba8f1b2a42";
var response

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response" });
});

app.get("/noAuth", async (req, res) => {
  
  try {
    response = await axios.get(API_URL + "random");
    response = JSON.stringify(response.data);
    console.log(response);
    res.render("index.ejs", { content: response });
  } catch (error) {
    console.error("Failed to make request", error.message);
    response = error.message;
    res.render("index.ejs", { content: response });
  }
  
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {

  try {
    response = await axios.get(API_URL + "all", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    response = JSON.stringify(response.data);
    console.log(response);
    res.render("index.ejs", { content: response });
  } catch (error) {
    console.error("Failed to make request", error.message);
    response = error.message;
    res.render("index.ejs", { content: response });
  }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  try {
    response = await axios.get(API_URL + "filter", {
      params: {
        apiKey: yourAPIKey,
        score: 7
      },
    })
    response = JSON.stringify(response.data);
    console.log(response);
    res.render("index.ejs", { content: response});
  } catch (error) {
    console.error("Failed to make request", error.message);
    response = error.message;
    res.render("index.ejs", { content: response });
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  try {
    response = await axios.get(API_URL + "secrets/4", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    response = JSON.stringify(response.data);
    res.render("index.ejs", { content: response });
  } catch (error) {
    console.error("Failed to make request", error.message);
    response = error.message;
    res.render("index.ejs", { content: response });
  }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
