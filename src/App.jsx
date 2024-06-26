import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Home/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
