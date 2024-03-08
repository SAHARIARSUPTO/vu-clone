import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faGraduationCap,
  faChalkboardTeacher,
  faBook,
  faAward,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

const Forms = () => {
  // Additional university forms data
  const universityForms = [
    { name: "Student Enrollment", icon: faUserGraduate },
    { name: "Course Registration", icon: faGraduationCap },
    { name: "Faculty Appointment", icon: faChalkboardTeacher },
    { name: "Library Access", icon: faBook },
    { name: "Scholarship Application", icon: faAward },
    { name: "Course Evaluation", icon: faCalculator },
    // Add more university forms here
    { name: "Form 7", icon: faUserGraduate },
    { name: "Form 8", icon: faGraduationCap },
    { name: "Form 9", icon: faChalkboardTeacher },
    { name: "Form 10", icon: faBook },
    { name: "Form 11", icon: faAward },
    { name: "Form 12", icon: faCalculator },
    // Add more university forms here
    // Add more university forms here up to 30 forms
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4">
      {universityForms.map((form, index) => (
        <div key={index} className="form-card">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <FontAwesomeIcon
                icon={form.icon}
                className="text-4xl text-blue-500 mr-2"
              />
            </div>
            <div className="text-center">
              <span className="text-lg font-medium">{form.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forms;
