import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home";

import "./styles/globals.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
