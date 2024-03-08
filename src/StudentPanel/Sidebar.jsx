import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMoneyBill,
  faPoll,
  faFileAlt,
  faComments,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { studentID } = useParams(); // Retrieve student ID from URL
  console.log(studentID);

  return (
    <div className="">
      <div className="drawer lg:drawer-open bg-gray-300 text-black">
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
          <ul className="menu p-4 w-64 min-h-full bg-gray-300 text-black hover:text-black">
            {/* Sidebar content here */}
            <li className="mb-4">
              <NavLink
                to={`/dashboard/${studentID}`}
                className="flex items-center text-black"
                activeClassName="active-link"
                activeStyle={{
                  backgroundColor: "blue", // Change background color here
                }}
              >
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Attendance
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to={`/dashboard/tuitionfees/${studentID}`}
                className="flex items-center text-black"
                activeClassName="active-link"
                activeStyle={{
                  backgroundColor: "blue", // Change background color here
                }}
              >
                <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
                Tuition Fees
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to={`/dashboard/results/${studentID}`}
                className="flex items-center text-black"
                activeClassName="active-link"
                activeStyle={{
                  backgroundColor: "blue", // Change background color here
                }}
              >
                <FontAwesomeIcon icon={faPoll} className="mr-2" />
                Results
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to={`/dashboard/forms/${studentID}`}
                className="flex items-center text-black"
                activeClassName="active-link"
                activeStyle={{
                  backgroundColor: "blue", // Change background color here
                }}
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Forms
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to={`/dashboard/feedback/${studentID}`}
                className="flex items-center text-black"
                activeClassName="active-link"
                activeStyle={{
                  backgroundColor: "blue", // Change background color here
                }}
              >
                <FontAwesomeIcon icon={faComments} className="mr-2" />
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/applications/${studentID}`}
                className="flex items-center text-black"
                activeClassName="active-link"
                activeStyle={{
                  backgroundColor: "blue", // Change background color here
                }}
              >
                <FontAwesomeIcon icon={faTasks} className="mr-2" />
                Applications
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
