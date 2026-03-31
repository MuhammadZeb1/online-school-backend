import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
// import courseRoutes from "./routes/courseRoutes.js";
import cors from "cors";

dotenv.config();

// DB Connection
connectDB();

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ================= ROUTES =================

// Auth (login/register)
app.use("/api/auth", authRoutes);

// User (teacher request)
app.use("/api/users", userRoutes);

// Admin (approve/reject teacher)
app.use("/api/admin", adminRoutes);

// Courses
// app.use("/api/courses", courseRoutes);

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ================= ERROR HANDLER (OPTIONAL) =================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
