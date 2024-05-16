import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages
import Home from "./routes/Home.tsx";
import Repos from "./routes/Repos.tsx";
import ReposLast from "./routes/ReposLast.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/best/:username",
        element: <Repos />,
      },
      {
        path: "/repos/last/:username",
        element: <ReposLast />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
