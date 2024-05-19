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
import AtAGlance from "./NavbarPages/AtAglance.jsx";
import History from "./NavbarPages/History.jsx";
import WhyVu from "./NavbarPages/WhyVu.jsx";
import ACClass from "./NavbarPages/ACClass.jsx";
import LaboratoryInfo from "./NavbarPages/LaboratoryInfo.jsx";
import Transportation from "./NavbarPages/Transportation.jsx";
import LibraryFacility from "./NavbarPages/LibraryFacility.jsx";
import DepartmentCards from "./NavbarPages/Departments.jsx";
import Buspass from "./Home/Bus/Buspass.jsx";
import NoticeBoard from "./NavbarPages/NoticeBoard.jsx";
import Bloodline from "./NavbarPages/BloodLine.jsx";
import Feedback from "./NavbarPages/Feedback.jsx";
import Alumni from "./NavbarPages/Alumni.jsx";
import Admission from "./NavbarPages/Admission.jsx";
import AdminIndex from "./Admin/AdminIndex.jsx";
import AdmissionRercord from "./Admin/AdmissionRecord.jsx";
import BusPassBusspassRecord from "./Admin/BusspassRecord.jsx";
import FeedbackRecord from "./Admin/FeedbackRecord.jsx";

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
        path: "/ata_glance",
        element: <AtAGlance></AtAGlance>,
      },
      {
        path: "/vu_history",
        element: <History></History>,
      },
      {
        path: "/why_vu",
        element: <WhyVu></WhyVu>,
      },
      {
        path: "/ac_classroom",
        element: <ACClass></ACClass>,
      },
      {
        path: "/lab",
        element: <LaboratoryInfo></LaboratoryInfo>,
      },
      {
        path: "/transport",
        element: <Transportation></Transportation>,
      },
      {
        path: "/library",
        element: <LibraryFacility></LibraryFacility>,
      },
      {
        path: "/departments",
        element: <DepartmentCards></DepartmentCards>,
      },
      {
        path: "/buspass",
        element: <Buspass></Buspass>,
      },
      {
        path: "/notice_board",
        element: <NoticeBoard></NoticeBoard>,
      },
      {
        path: "/bloodine",
        element: <Bloodline></Bloodline>,
      },
      {
        path: "/feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "/alumni",
        element: <Alumni></Alumni>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
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
      {
        path: "/admin_panel",
        element: <AdminIndex></AdminIndex>,
        children: [
          {
            path: "/admin_panel/notice",
            element: <NoticeBoard></NoticeBoard>,
          },
          {
            path: "/admin_panel/admission",
            element: <AdmissionRercord></AdmissionRercord>,
          },
          {
            path: "/admin_panel/buspass",
            element: <BusPassBusspassRecord></BusPassBusspassRecord>,
          },
          {
            path: "/admin_panel/feedback",
            element: <FeedbackRecord></FeedbackRecord>,
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
