import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

const port = process.env.PORT || 8080;

const FRONTEND_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.send("AI Task Manager API is running");
});

export default app;
