import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports the necessary CSS

const CarouselComponent = () => {
  return (
    <ResponsiveCarousel
      showArrows={true}
      autoPlay
      interval={2000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      useKeyboardArrows
      transitionTime={500}
      swipeable
      dynamicHeight={false}
      emulateTouch
    >
      <div className="carousel-item relative">
        <img
          className="w-full object-cover sm:h-[650px] h-[300px]"
          src="https://vu.edu.bd/uploads/slider/images/3N8A7687-2.jpg"
          alt="Legend 1"
        />
        <p className="absolute left-0 bottom-10 ml-5 text-[#c44c2c] text-xs sm:text-xl font-bold bg-white/30 p-5 rounded-xl backdrop-blur-md">
          Varendra University Future and Permanent Campus
        </p>
      </div>
      <div className="carousel-item relative">
        <img
          className="w-full object-cover sm:h-[650px] h-[300px]"
          src="https://vu.edu.bd/uploads/slider/images/3N8A8226.jpg"
          alt="Legend 1"
        />
        <p className="absolute left-0 bottom-10 ml-5 text-[#c44c2c] text-xs sm:text-xl font-bold bg-white/30 p-5 rounded-xl backdrop-blur-md">
          Varendra University Transportation
        </p>
      </div>
      <div className="carousel-item relative">
        <img
          className="w-full object-cover sm:h-[650px] h-[300px]"
          src="https://vu.edu.bd/uploads/slider/images/01.JPG"
          alt="Legend 2"
        />
        <p className="absolute left-0 bottom-10 ml-5 text-[#c44c2c] text-xs sm:text-xl font-bold bg-white/30 p-5 rounded-xl backdrop-blur-md">
          1st Convocation
        </p>
      </div>
      <div className="carousel-item relative">
        <img
          className="w-full object-cover sm:h-[650px] h-[300px]"
          src="https://vu.edu.bd/uploads/slider/images/3N8A7976.jpg"
          alt="Legend 3"
        />
        <p className="absolute left-0 bottom-10 ml-5 text-[#c44c2c] text-xs sm:text-xl font-bold bg-white/30 p-5 rounded-xl backdrop-blur-md">
          Permanent Campus at Kharkhari Bypass, Rajshahi.
        </p>
      </div>
    </ResponsiveCarousel>
  );
};

export default CarouselComponent;
