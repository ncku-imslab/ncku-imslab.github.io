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
        path: "/",
        element: <Home />,
      }, {
        path: "/research",
        element: <Research />,
      }, {
        path: "/professor",
        element: <Professor />,
      }, {
        path: "/students",
        element: <Students />,
      }, {
        path: "/alumni",
        element: <Alumni />,
      }, {
        path: "/honors",
        element: <Honors />,
      }, {
        path: "/resources",
        element: <Resources />,
      }, {
        path: "/contact",
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
