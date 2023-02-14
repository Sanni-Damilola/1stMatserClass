import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import postSchema from "../Model/Model";

const port: number = 2001;

const app: Application = express();

app.use(express.json()).use(cors());

// create a post
app.post("/api/post", (req, res) => {
  const { title, description } = req.body;

  const creating = postSchema.create({
    title,
    description,
  });

  res.status(201).json(creating);
});

// get one post
app.get("/api/getone/:id", (req, res) => {
  const getonePost = postSchema.findById(req.params.id);

  res.status(201).json(getonePost);
});

// edit one post
app.patch("/api/getone/:id", (req, res) => {
  const { title } = req.body;

  const editPost = postSchema.findByIdAndUpdate(req.params.id, {
    title,
  });

  res.status(201).json(editPost);
});

// delete one post
app.delete("/api/getone/:id", (req, res) => {
  const deleteOne = postSchema.findByIdAndDelete(req.params.id);

  res.status(201).json(deleteOne);
});

// getAll post
app.get("/api/getall", (req, res) => {
  const getAllPost = postSchema.find();

  res.status(201).json(getAllPost);
});

app.listen(port, () => {
  console.log("Done on", port);
});
