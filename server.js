import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";  // <-- import cors

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Explicitly allow your frontend
  credentials: true                // Allow cookies/headers
}));

// routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
