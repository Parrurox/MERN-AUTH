import express from "express";

// Load env variables (this is due to older LTS version of node, newer version don't need this line of code)
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
// Create an express application
const app = express();
app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
