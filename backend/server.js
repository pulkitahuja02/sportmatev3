import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./database.js"; // Make sure to add .js extension
import authRoutes from "./routes/auth.js"; // Make sure to add .js extension

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});