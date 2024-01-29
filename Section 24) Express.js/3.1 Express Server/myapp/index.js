import express from 'express';
const app = express();
const port = 3000; /* The 3000 means the port being used on the computer */

app.listen(port, () => { /* The 3000 means the port being used on the computer */
  console.log("Server running on port " + port); /* Line for callback */
})

/* To run program use node "name of app".js  */