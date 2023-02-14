import express, { Application, Request, Response } from "express";
import cors from "cors";
import postSchema from "../Model/Model";

const port: number = 2001;

const app: Application = express();

app.use(express.json()).use(cors());

// create a post
app.post("/api/post", (req: Request, res: Response) => {
  const { title, description } = req.body;

  const creating = postSchema.create({
    title,
    description,
  });

  res.status(201).json(creating);
});

app.all("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "up and running",
  });
}); // landing message

app.get("/api/getone/:id", (req: Request, res: Response) => {
  const getonePost = postSchema.findById(req.params.id);

  res.status(201).json(getonePost);
}); // get one post

app.patch("/api/update/:id", (req: Request, res: Response) => {
  const { title } = req.body;

  const editPost = postSchema.findByIdAndUpdate(req.params.id, {
    title,
  });

  res.status(201).json(editPost);
}); // edit one post

app.delete("/api/deleteOne/:id", (req, res) => {
  const deleteOne = postSchema.findByIdAndRemove(req.params.id);

  res.status(201).json(deleteOne);
}); // delete one post

app.get("/api/getall", (req, res) => {
  const getAllPost = postSchema.find();

  res.status(200).json(getAllPost);
}); // getAll post

app.delete("/api/deleteAll", (req, res) => {
  const deleteAll = postSchema.deleteMany();
  res.status(200).json({
    message: "deleted All Data",
  });
}); // deleteing All Data

app.listen(port, () => {
  console.log("Done on", port);
}); // listening to post
