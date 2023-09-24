import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AppliedJobs from "../pages/AppliedJobs";
import NotFoundPage from "../pages/NotFoundPage";
import axios from "axios";
import JobDetails from "../pages/JobDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => axios.get("../categories.json"),
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs />,
                loader: () => axios.get("../jobs.json")
            },
            {
                path: "job-details/:id",
                element: <JobDetails />,
                loader: () => axios.get("../jobs.json")
            },




        ]
    }
])

