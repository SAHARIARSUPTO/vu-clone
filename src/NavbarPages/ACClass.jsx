import "@fortawesome/fontawesome-free/css/all.css";

const ACClass = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://vu.edu.bd/uploads/media/images/pcampus1.jpg')`,
        }}
        className="min-h-screen"
      >
        <div></div>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#c44c2c]">
            Classrooms Getting AC Soon!
          </h1>
          <p className="text-lg mb-8">
            Experience comfortable learning environments with air-conditioned
            classrooms at our permanent campus.
          </p>
          <div className="text-9xl text-[#c44c2c] mb-8">
            <i className="fas fa-thermometer-full"></i>
          </div>
          <p className="text-lg">
            Stay tuned for updates on the exciting improvements happening at VU!
          </p>
        </div>
      </div>
    </>
  );
};

export default ACClass;
