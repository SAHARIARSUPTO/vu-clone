import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faPerson } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
    return (
        <div className="flex justify-end gap-5 pr-20 bg-[#c44c2c] p-2">
            <Link to="/studentlogin" className="flex items-center text-white hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faPerson} className="text-sm md:text-base" />
                <span className="ml-2 text-xs md:text-base">Student Panel</span>
            </Link>

            <Link to="/employeelogin" className="flex items-center text-white hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faPerson} className="text-sm md:text-base" />
                <span className="ml-2 text-xs md:text-base">Employee's Corner</span>
            </Link>

            <Link to='/busRoutes' className="flex items-center text-white hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faBus} className="text-sm md:text-base" />
                <span className="ml-2 text-xs md:text-base">Bus Routes</span>
            </Link>
        </div>
    );
};

export default SecondNavbar;
