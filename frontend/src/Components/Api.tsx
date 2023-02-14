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
    .get(`http://localhost:2001/api/delete/${id}`)
    .then((res) => res.data);
};

export const CreatingPostData = async ({ title, description }: IData) => {
  return await axios
    .post("http://localhost:2001/api/post", {
      title,
      description,
    })
    .then((res) => res.data);
};
