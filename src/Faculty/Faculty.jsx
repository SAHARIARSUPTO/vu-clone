import React from "react";
import faculties from "./Faculty.json"; // Importing the JSON data

const FacultyCard = ({ name, image }) => (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={image} alt={name} className="object-cover h-48 w-full" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>
        Varendra University's {name} is dedicated to providing top-notch
        education and support to help you succeed.
      </p>
      <div className="card-actions justify-end">
        <div className="inline-block">
          <a
            href="#_"
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#c44c2c] hover:bg-gradient-to-r text-white hover:ring-2  hover:ring-green-400 "
          >
            <span className="relative">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Faculty = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-10">
      <div>
        <p className="text-center text-lg sm:text-4xl">
          Our <span className="text-[#c44c2c] font-bold">Faculty</span>
        </p>
        <p className="text-center me-10 ms-10 mt-4 text-lg sm:text-xl">
          Varendra University boasts a team of four dedicated faculties who are
          committed to assisting you in building your career and achieving your
          objectives.
        </p>
      </div>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {faculties.map((faculty) => (
          <FacultyCard
            key={faculty.name}
            name={faculty.name}
            image={faculty.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
