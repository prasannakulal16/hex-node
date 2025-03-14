import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/Home";
import NotFound from "../pages/Notfound";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default appRoutes;
