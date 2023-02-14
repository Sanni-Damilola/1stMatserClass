import axios from "axios";

interface IData {
  title: string;
  description: string;
}

export const FetchPost = async () => {
  return axios.get("http://localhost:2001/api/getone").then((res) => res.data);
};
export const FetchSinglePost = async (id: any) => {
  return axios
    .get(`http://localhost:3400/api/getPost/${id}`)
    .then((res) => res.data);
};
export const CreatingPostData = async ({ title, description }: IData) => {
  return await axios
    .post("http://localhost:3400/api/createPosts", {
      title,
      description,
    })
    .then((res) => res.data);
};
