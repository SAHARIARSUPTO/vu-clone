import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between mx-auto p-10 bg-blue-900 text-white mt-5 gap-6">
        <div>
          <p>Varendra University, Chandrima, Bypass Road, Rajshahi-6204</p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +88 02 588 867 274
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +88 02 588 867 459
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 096 77 601 070
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +88 017 304 065 01-3, +88 017 304
            065 90
          </p>
          <p>
            <FontAwesomeIcon icon={faMessage} /> info@vu.edu.bd{" "}
          </p>
        </div>
        <div>
          <img
            className="w-3/5"
            src="https://vu.edu.bd/img/whitelogo.png"
            alt="Varendra University Logo"
          />
          <p>
            Developed and Maintained by IT Office, VU © 2012-2023 Varendra
            University
          </p>
        </div>
      </div>
      <p className="text-center text-white justify-center mx-auto p-2 bg-red-800">
        This Site is Developed by{" "}
        <a
          href="https://dev.sahariarsupto.web.app"
          className="text-white underline"
        >
          Sahariar Hosen Supto
        </a>{" "}
        for Practice purpose only. Please Visit The original Site of Varendra
        University to get authorized Services:{" "}
        <a href="https://vu.edu.bd" className="text-white underline">
          vu.edu.bd
        </a>
      </p>
    </div>
  );
};

export default Footer;
