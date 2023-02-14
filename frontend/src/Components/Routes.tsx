import React from "react";
import { useRoutes } from "react-router";
import DetailPost from "./DetailPost";
import PostData from "./PostData";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatingPostData, FetchPost } from "./Api";
import { Link } from "react-router-dom";

const Routes = () => {
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

  console.log(getPost);

  const element = useRoutes([
    {
      path: "/",
      element: <PostData />,
    },
    {
      path: "/detailpage",
      element: <DetailPost />,
    },
  ]);

  return element;
};

export default Routes;
