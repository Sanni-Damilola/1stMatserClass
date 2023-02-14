import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatingPostData, FetchPost } from "./Api";
import { Link } from "react-router-dom";

const PostData = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const getPost = useQuery({
    queryKey: ["post"],
    queryFn: FetchPost,
  });

  const posting = useMutation({
    mutationFn: CreatingPostData,

    onSuccess: (data) => {
      queryClient.invalidateQueries(["post"]);
    },
  });

  const handleSubmit = () => {
    posting.mutate({
      myTitle: title,
      description,
    });
  };

  return (
    <div>
      <br />
      <br />
      <h1>Create Post</h1>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="title"
        style={{
          height: "30px",
          width: "300px",
          margin: "10px",
        }}
      />
      <br />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="description"
        style={{
          height: "100px",
          width: "300px",
          margin: "10px",
        }}
      />
      <br />
      <button disabled={posting?.isLoading} onClick={handleSubmit}>
        Add Post
      </button>
      <br />
      <br />
      <br />
      <br />

      <h2>All Posts</h2>

      <div>
        {getPost.isLoading ? <h1>Loading...</h1> : null}
        {getPost?.data?.map((props: any) => (
          <Link to={`/detail/${props._id}`}>
            <div
              key={props?._id}
              style={{
                height: "70px",
                width: "300px",
                background: "#f1f1f1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                border: "1px solid silver",
              }}
            >
              <div>{props?.myTitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostData;
