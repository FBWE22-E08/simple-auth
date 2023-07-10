import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.listen(() => {
  console.log("The server is listening...");
}, 4000);
