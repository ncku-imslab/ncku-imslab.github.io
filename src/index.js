import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import "tachyons"
import Home from "./pages/home";
import Research from "./pages/research";
import Professor from "./pages/professor";
import Students from "./pages/students";
import Alumni from "./pages/alumni";
import Honors from "./pages/honors";
import Resources from "./pages/resources";
import Contact from "./pages/contact";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: process.env.PUBLIC_URL + "/",
        element: <Home />,
      }, {
        path: process.env.PUBLIC_URL + "/research",
        element: <Research />,
      }, {
        path: process.env.PUBLIC_URL + "/professor",
        element: <Professor />,
      }, {
        path: process.env.PUBLIC_URL + "/students",
        element: <Students />,
      }, {
        path: process.env.PUBLIC_URL + "/alumni",
        element: <Alumni />,
      }, {
        path: process.env.PUBLIC_URL + "/honors",
        element: <Honors />,
      }, {
        path: process.env.PUBLIC_URL + "/resources",
        element: <Resources />,
      }, {
        path: process.env.PUBLIC_URL + "/contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
