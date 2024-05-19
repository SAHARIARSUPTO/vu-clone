import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faDesktop, faBolt } from "@fortawesome/free-solid-svg-icons";

const LaboratoryInfo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://vu-server.vercel.app/lab")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array with a single object
        if (data && data.length > 0) {
          setData(data[0]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#c44c2c] animate-spin"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://vu.edu.bd/uploads/media/images/pcampus1.jpg')`,
        }}
      >
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-[#c44c2c]">
            Pharmacy Laboratories
          </h1>
          <div className="grid grid-cols-1 gap-4">
            {data.pharmacy_laboratories.map((lab, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
              >
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-[#c44c2c] text-3xl"
                />
                <h2 className="text-xl font-semibold">{lab}</h2>
              </div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mt-8 mb-4 text-[#c44c2c]">
            Computer Labs
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-[#c44c2c] text-3xl"
            />
            <p>{data.computer_labs.description}</p>
          </div>

          <h1 className="text-3xl font-bold mt-8 mb-4 text-[#c44c2c]">
            Electrical and Electronic Labs
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faBolt}
              className="text-yellow-500 text-3xl"
            />
            <p>{data.electrical_and_electronic_labs.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaboratoryInfo;
