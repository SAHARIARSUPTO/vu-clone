import backgroundVideo from "./VARENDRA-UNIVERSITY.mp4"; // Import the video file

const BackgroundVideo = () => {
  return (
    <div className="relative mt-1 mb-72 pb-8">
      <video
        className="absolute inset-0 w-full min-h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-center py-16">
        <h1 className="text-6xl font-bold text-[#c44c2c]">
          Make Your Dreams Come True
        </h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
