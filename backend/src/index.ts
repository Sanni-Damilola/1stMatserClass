import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

const port: number = 2001;

const app: Application = express();

app.use(express.json()).use(cors());

app.listen(port, () => {
  console.log("Done on", port);
});
