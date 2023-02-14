import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FetchPost, FetchSinglePost } from "./Api";

const DetailPost = () => {
  const { id } = useParams();

  console.log(id);

  const fetchData = useQuery({
    queryKey: ["post", id],
    queryFn: () => FetchSinglePost(id),
  });

  return (
    <div>
      <div>
        <h1> Detailed</h1>
        <br />
        <br />
        <br />
        <br />
        {fetchData.isLoading ? <h3>Loading..</h3> : null}
        <div>{fetchData.data?.myTitle}</div>
        <div>{fetchData.data?.description}</div>
      </div>
    </div>
  );
};

export default DetailPost;
