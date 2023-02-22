import axios from "axios";

const host = "http://localhost:2001/api";

export const getAll = async () => {
  return await axios.get(`${host}/getall`).then((res) => res.data);
};

interface data {
  title: string;
  description: string;
}

export const postData = async ({ title, description }: data) => {
  return await axios
    .post(`${host}/post`, {
      title,
      description,
    })
    .then((res) => res.data);
};
