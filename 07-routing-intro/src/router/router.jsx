import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../pages/User";
import { Github } from "../pages/Github";
import { githubInfoLoader } from "../helpers/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userid?",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader,
      },
      {
        path: "*",
        element: (
          <div className="flex w-screen bg-red-700">
            <h1 className="flex mx-auto text-center text-4xl font-bold my-10  text-white py-5">
              Page not found
            </h1>
          </div>
        ),
      },
    ],
  },
]);

export default router;
