import React from "react";
import { useRoutes } from "react-router";
import DetailPost from "./DetailPost";
import PostData from "./PostData";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <PostData />,
    },
    {
      path: "/detail/:id",
      element: <DetailPost />,
    },
  ]);

  return element;
};

export default Routes;
