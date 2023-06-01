import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import JobDetails from "./components/JobDetails/JobDetails";
import FeaturedJob from "./components/FeaturedJob/FeaturedJob";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },

      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/featuredJobs",
        element: <FeaturedJobs></FeaturedJobs>
      },
      /*  {
         path: '/jobDetails',
         element: <JobDetails></JobDetails>,
        
       }, */
      {
        path: "/featuredJob/:detailsId",
        element: <JobDetails></JobDetails>,
        loader: async () => fetch('/featuredJobs.json')

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);