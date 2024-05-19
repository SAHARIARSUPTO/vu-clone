import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Transportation = () => {
  const busImages = [
    "https://mir-s3-cdn-cf.behance.net/projects/404/d4e2b5161519949.Y3JvcCwxMjc4LDEwMDAsMTEwLDA.jpg",
    "https://i.ytimg.com/vi/939sFebYws8/maxresdefault.jpg",
    // "https://example.com/bus3.jpg",
    // "https://example.com/bus4.jpg",
    // "https://example.com/bus5.jpg",
  ];

  return (
    <>
      <div className="container mx-auto p-4 min-h-screen ">
        <h1 className="text-3xl font-bold mb-4 text-[#c44c2c]">
          University Transportation
        </h1>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4  mb-6">
          <FontAwesomeIcon icon={faBus} className="text-red-500 text-3xl" />
          <p>
            The University has 5 buses for student transportation. These buses
            are well-maintained and ensure safe and comfortable travel for all
            students.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Bus Fleet</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {busImages.map((url, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={url}
                alt={`Bus ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <Link
          to="/busRoutes"
          className="bg-[#c44c2c] text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Know About Bus Routes
        </Link>
      </div>
    </>
  );
};

export default Transportation;
