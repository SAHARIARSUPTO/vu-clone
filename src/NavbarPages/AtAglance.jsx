import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const AtAGlance = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://vu-server.vercel.app/ata_glance")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((fetchedData) => {
        console.log("Fetched data:", fetchedData);
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
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
  if (error)
    return <div className="text-center py-20">Error: {error.message}</div>;

  return (
    <>
      <div className="min-h-">
        <div
          className="py-8"
          style={{
            backgroundImage: `url('https://vu.edu.bd/uploads/media/images/pcampus1.jpg')`,
          }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-[#c44c2c]">
              University Information
            </h1>
            {data.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-md p-4 mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {item.universityInformation.NameOfTheUniversity}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-200 p-4 rounded-md flex items-center ">
                      <FontAwesomeIcon
                        icon={faUniversity}
                        className="text-5xl mr-2 text-[#c44c2c]"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          University Information
                        </h3>
                        <p>
                          <strong>Year of Establishment:</strong>{" "}
                          {item.universityInformation.YearOfEstablishment ||
                            "Not provided"}
                        </p>
                        <p>
                          <strong>Approval:</strong>{" "}
                          {
                            item.universityInformation
                              .ApprovalFromMinistryOfEducation
                          }
                        </p>
                        <p>
                          <strong>Commencement of Classes:</strong>{" "}
                          {item.universityInformation.CommencementOfClasses}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md flex items-center ">
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="text-5xl mr-2 text-[#c44c2c]"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Building and Location
                        </h3>
                        <p>
                          <strong>Permanent Campus:</strong>{" "}
                          {item.buildingAndLocation.PermanentCampus}
                        </p>
                        <p>
                          <strong>Building 01:</strong>{" "}
                          {item.buildingAndLocation.Building01}
                        </p>
                        <p>
                          <strong>Building 02:</strong>{" "}
                          {item.buildingAndLocation.Building02}
                        </p>
                        <p>
                          <strong>Future Permanent Campus:</strong>{" "}
                          {item.buildingAndLocation.FuturePermanentCampus}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md flex items-center ">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="text-5xl mr-2 text-[#c44c2c]"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Faculties</h3>
                        <ul>
                          {item.faculties.map((faculty, index) => (
                            <li key={index}>{faculty}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AtAGlance;
