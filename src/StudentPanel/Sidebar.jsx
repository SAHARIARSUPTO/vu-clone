import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open bg-[#c44c2c] text-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-[#c44c2c] text-white">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/attendance"> Attendance</Link>
            </li>
            <li>
              <a>Tuition Fees</a>
            </li>
            <li>
              <a>Results</a>
            </li>
            <li>
              <a>Forms</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
            <li>
              <a>Applications</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
