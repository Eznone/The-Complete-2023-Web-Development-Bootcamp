import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

console.log(__dirname);

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL"
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(__dirname + "qr_img.png"));
    // Use user feedback for... whatever!!
    console.log("Made");
    fs.writeFile(__dirname + "/text/URL.txt", url, (err) => {
      if (err) throw err;
      console.log("File has been saved!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error 1");
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error);
      // Something else went wrong
    }
  });