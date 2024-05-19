import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SecondNavbar from "./SecondNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-base-100">
        <div className="navbar container mx-auto p-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="">
              <img className="w-32 md:w-40 lg:w-48" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-2 md:space-x-3 lg:space-x-4">
            <div className="group relative hover:bg-gray-100 p-2 rounded hover:text-[#c44c2c]">
              About VU <FontAwesomeIcon icon={faAngleDown} />
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
                <Link
                  to="/ata_glance"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  At a Glance
                </Link>
                <Link
                  to="/vu_history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  History of VU
                </Link>
                <Link
                  to="/why_vu"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Why VU?
                </Link>
              </div>
            </div>

            <div className="group relative hover:bg-gray-100 hover:text-[#c44c2c] p-2 rounded">
              Facilities <FontAwesomeIcon icon={faAngleDown} />
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
                <Link
                  to="/ac_classroom"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  AC Classroom
                </Link>
                <Link
                  to="/lab"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Laboratories
                </Link>
                <Link
                  to="/library"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Libraries
                </Link>
                <Link
                  to="/transport"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Transportation
                </Link>
              </div>
            </div>

            <div className="group relative hover:bg-gray-100 hover:text-[#c44c2c] p-2 rounded">
              Academics
              <FontAwesomeIcon icon={faAngleDown} />
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
                <Link
                  to="/departments"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Departments
                </Link>
              </div>
            </div>

            <div className="group relative hover:bg-gray-100 p-2 rounded hover:text-[#c44c2c]">
              <Link to="/employeelogin">Career Center</Link>
            </div>

            <div className="group relative hover:bg-gray-100 p-2 rounded hover:text-[#c44c2c]">
              Online Services
              <FontAwesomeIcon icon={faAngleDown} />
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
                <Link
                  to="/studentlogin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Student Panel
                </Link>
                <Link
                  to="/employeelogin"
                  className="block px-4 py-2 text-sm text-gray-700
                  hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  {" "}
                  Career at VU
                </Link>
                <Link
                  to="/buspass"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Bus Pass
                </Link>
                <Link
                  to="/bloodine"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-500 mr-2"
                  />
                  VU Bloodline
                </Link>

                <Link
                  to="/notice_board"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Events
                </Link>
                <Link
                  to="/feedback"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Complain & Suggestions
                </Link>
                <Link
                  to="/studentlogin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-[#c44c2c] hover:bg-gray-100"
                >
                  Information Update
                </Link>
              </div>
            </div>
            <div className="group relative hover:bg-gray-100 p-2 rounded hover:text-[#c44c2c]">
              <Link to="/alumni">Alumni</Link>
            </div>
            <div>
              <Link
                to="/notice_board"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#c44c2c] hover:bg-gradient-to-r text-white hover:ring-2  hover:ring-green-400 "
              >
                Notices
              </Link>
            </div>
            <div className="inline-block">
              <Link
                to="/admission"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#c44c2c] hover:bg-gradient-to-r text-white hover:ring-2  hover:ring-green-400 "
              >
                <span className="relative">Admission</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-button text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <SecondNavbar></SecondNavbar>
    </div>
  );
};

export default Navbar;
