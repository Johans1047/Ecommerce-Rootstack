import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home";
import Commerce from "./views/Commerce";
import AboutUs from "./views/AboutUs";
import UserFlow from "./views/UserFlow";

import "./styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/commerce",
        element: <Commerce/>
    },
    {
        path: "/about-us",
        element: <AboutUs/>
    },
    {
        path: "/users",
        element: <UserFlow/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
