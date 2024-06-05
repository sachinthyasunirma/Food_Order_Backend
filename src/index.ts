import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import compression from "compression";
import mongoose from "mongoose";
import env from "dotenv";

env.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.listen(process.env.PORT, () => {
  console.log("server running on http://localhost:8080");
});
