import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
