import mongoose from "mongoose";

interface data {
  title: string;
  desc: string;
}

interface postData extends data, mongoose.Document {}

const mySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
});

export default mongoose.model<postData>("post", mySchema);
