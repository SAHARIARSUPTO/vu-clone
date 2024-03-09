import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../Footer/Footer";

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
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
