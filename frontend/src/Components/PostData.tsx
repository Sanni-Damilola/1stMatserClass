import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatingPostData, deletOne, FetchPost, updatPost } from "./Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  const deleteData = useQuery({
    queryKey: ["post"],
    queryFn: deletOne,
  });

  const handleSubmit = () => {
    posting.mutate({
      title,
      description,
    });
  };

  // update toggle input
  const [show, setShow] = React.useState(false);
  const toggle = (id: string) => {
    setShow(!show);
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

      <h2>All Posts</h2>

      <Wrap>
        {getPost.isLoading ? <h1>Loading...</h1> : null}
        {getPost?.data?.map((props: any) => (
          <div
            key={props?._id}
            style={{
              padding: "40px",
              background: "#f1f1f1",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              border: "1px solid silver",
            }}
          >
            <Link to={`/detail/${props._id}`}>
              <div>{props?.title}</div> <br />
              <div>{props?.description}</div> <br />
            </Link>
            <button onClick={deletOne}>delete</button>
            <br />
            {/* {props._id === props._id ? <input type="text" /> : null} */}
            <button>update</button>
          </div>
        ))}
      </Wrap>
    </div>
  );
};

export default PostData;

const Wrap = styled.div`
  height: 500px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;
