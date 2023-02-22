import React from "react";
import styled from "styled-components";
import { getAll, postData } from "./Components/Api";
import Routes from "./Components/Routes";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function App() {
  const getAllData = useQuery({
    queryKey: ["post"],
    queryFn: getAll,
  });

  const queryClient = useQueryClient();
  const creatData = useMutation({
    mutationFn: postData,
  });

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleClik = () => {
    creatData.mutate({
      title,
      description,
    });
  };

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>Add Post</h3>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        style={{ margin: "15px" }}
        placeholder="title"
        type="text"
      />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        style={{ margin: "15px" }}
        placeholder="description"
        type="text"
      />
      <button
        onClick={handleClik}
        style={{ padding: "15px", cursor: "pointer" }}
      >
        add post
      </button>
      <h1>View Post</h1>
      {getAllData?.isLoading ? <p>loading...</p> : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {getAllData?.data?.map((e: any) => (
          <div
            key={e._id}
            style={{
              margin: "15px",
              padding: "100px",
              backgroundColor: "grey",
            }}
          >
            {e.title}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
