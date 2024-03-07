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
            path: "attendance",
            element: <Attendance></Attendance>,
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
