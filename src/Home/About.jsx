import React from 'react';
import aboutData from "./About.json";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div>
        <p className="text-center text-lg sm:text-4xl font-semibold">
          About <span className='text-[#c44c2c]'>Varendra University</span>
        </p>
        <p className="text-center me-10 ms-10 mt-4 text-lg sm:text-xl">
          Varendra University, established on September 24, 2012, holds the distinction of being the first University Grants Commission (UGC) approved private university in Rajshahi. It boasts a permanent campus strategically located at Kharkhari Bypass, Rajshahi.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-4">
        {aboutData.map((item, index) => (
          <div key={index} className="bg-white/30 p-5 rounded-xl backdrop-blur-md  border border-gray-200 text-center hover:bg-blue-100">
            <img className=" mx-auto rounded-xl mb-4 w-1/5" src={item.Image} alt={`Image ${index}`} />
            {item.Faculties && <p> {item.Faculties} Faculties</p>}
            {item.Departments && <p>{item.Departments} Departments</p>}
            {item.Programs && <p> {item.Programs.join(', ')} Programs</p>}
            {item.Sessions && <p>{item.Sessions}</p>}
            {item.Libraries && <p>{item.Libraries} Libraries</p>}
            {item.Classrooms && <p>{item.Classrooms} Classrooms</p>}
            {item.Transportation && <p>{item.Transportation} Transportation</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
