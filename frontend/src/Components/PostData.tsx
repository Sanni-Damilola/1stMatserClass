import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatingPostData, FetchPost } from "./Api";
import { Link } from "react-router-dom";

const PostData = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Create Post</h1>
      <input
        placeholder="title"
        style={{ height: "30px", width: "300px", margin: "10px" }}
        type="text"
      />{" "}
      <br />
      <textarea
        placeholder="add description"
        style={{ height: "100px", width: "300px", margin: "10px" }}
      ></textarea>
      <h2>All Post</h2>
    </div>
  );
};

export default PostData;
