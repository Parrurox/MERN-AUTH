import express from "express";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import path from "path"; // Node.js module for resolving file paths (after building frontend)

// Load env variables (this is due to older LTS version of node, newer version don't need this line of code)
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
// Connect to the database
import connectDB from "./config/db.js";

const port = process.env.PORT || 3000;
// Create an express application
const app = express();

connectDB();
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(cookieParser());

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

//------------------Routes------------------
app.use("/api/users", userRoutes); // Mount the userRoutes on /api/users

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
