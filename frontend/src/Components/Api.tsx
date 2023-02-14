import axios from "axios";

interface IData {
  title: string;
  description: string;
}

export const FetchPost = async () => {
  return axios.get("http://localhost:2001/api/getall").then((res) => res.data);
};
export const FetchSinglePost = async (id: any) => {
  return axios
    .get(`http://localhost:2001/api/getone/${id}`)
    .then((res) => res.data);
};

export const deletOne = async (id: any) => {
  return axios
    .get(`http://localhost:2001/api/delete/63ebe1ddd47f423b4f812261`)
    .then((res) => null);
};

export const CreatingPostData = async ({ title, description }: IData) => {
  return await axios
    .post("http://localhost:2001/api/post", {
      title,
      description,
    })
    .then((res) => res.data);
};

export const updatPost = async (id: any) => {
  return await axios
    .patch(`http://localhost:2001/api/update/${id}`)
    .then((res) => res.data);
};
