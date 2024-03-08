import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home/HomePage.jsx";
import BusRoutes from "./BusRoutes/BusRoutes.jsx";
import Login from "./StudentPanel/Login.jsx"; // Fixed the syntax error here
import Employee from "./Employee/Employee.jsx";
import Dashboard from "./StudentPanel/Dashboard.jsx";
import Attendance from "./StudentPanel/Attendance.jsx";
import TuitionFees from "./StudentPanel/TuitionFees.jsx";
import Froms from "./StudentPanel/Froms.jsx";
import Results from "./StudentPanel/Results.jsx";
import Feedback from "./StudentPanel/Feedback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/busRoutes",
        element: <BusRoutes />,
      },
      {
        path: "/studentlogin",
        element: <Login />,
      },
      {
        path: "/employeelogin",
        element: <Employee></Employee>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/:studentID",
            element: <Attendance></Attendance>,
          },
          {
            path: "/dashboard/tuitionfees/:studentID",
            element: <TuitionFees></TuitionFees>,
          },
          {
            path: "/dashboard/results/:studentID",
            element: <Results></Results>,
          },
          {
            path: "/dashboard/forms/:studentID",
            element: <Froms></Froms>,
          },
          {
            path: "/dashboard/applications/:studentID",
            element: <Froms></Froms>,
          },
          {
            path: "/dashboard/feedback/:studentID",
            element: <Feedback></Feedback>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
