import React from 'react';
import achievements from "./Achievement.json"; // Importing the JSON data

const AchievementCard = ({ title, description, image }) => (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={image} alt={title} className="object-cover h-48 w-full" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <div className="inline-block">
          <a href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#c44c2c] hover:bg-gradient-to-r text-white hover:ring-2  hover:ring-green-400 ">
            <span className="relative">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Achievement = () => {
  return (
    <div  className="flex flex-col items-center justify-center mt-10 p-10">
      <div>
        <p className="text-center text-lg sm:text-4xl font-semibold">
        Our<span className='text-[#c44c2c]'>Achievements</span>
        </p>
        <p className="text-center me-10 ms-10 mt-4 text-lg sm:text-xl">
        Celebrating Excellence: A Showcase of Our Achievements
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        {achievements.achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            description={achievement.description}
            image={achievement.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
