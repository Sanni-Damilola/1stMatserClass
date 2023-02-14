import mongoose from "mongoose";

interface data {
  title: string;
  description: string;
}

interface postData extends data, mongoose.Document {}

const mySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model<postData>("post", mySchema);
