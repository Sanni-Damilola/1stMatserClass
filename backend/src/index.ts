import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import postSchema from "../Model/Model";

const port: number = 2001;

const app: Application = express();

app.use(express.json()).use(cors());

// create a post
app.get("/api/post", (req, res) => {
  const { title, desc } = req.body;

  const creating = postSchema.create({
    title,
    desc,
  });

  res.status(201).json(creating)
});

// get one post
app.get("/api/getone/:id", (req, res) => {

  const getonePost = postSchema.findById(req.params.id);

  res.status(201).json(getonePost)
});

app.listen(port, () => {
  console.log("Done on", port);
});
// get one post
app.get("/api/getone/:id", (req, res) => {

  const getonePost = postSchema.findById(req.params.id);

  res.status(201).json(getonePost)
});

app.listen(port, () => {
  console.log("Done on", port);
});
