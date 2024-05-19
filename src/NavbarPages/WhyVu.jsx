import { useEffect, useState } from "react";
const UniversityInfo = () => {
  const [universityData, setUniversityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://vu-server.vercel.app/vu_history");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Response data:", data); // Log the fetched data to inspect it
        setUniversityData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url('https://vu.edu.bd/uploads/media/images/pcampus1.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <>
              <div className="flex items-center justify-center h-screen">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                  <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#c44c2c] animate-spin"></div>
                </div>
              </div>
            </>
          ) : error ? (
            <div className="text-center py-20">Error: {error}</div>
          ) : (
            <>
              {universityData.map((item, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-[#c44c2c]">
                    History of VU
                  </h2>
                  <p>{item.history.content}</p>
                  <h2 className="text-2xl font-bold mb-4 text-[#c44c2c]">
                    Vision
                  </h2>
                  <p>{item.visionAndMission.vision}</p>
                  <h2 className="text-2xl font-bold mb-4 text-[#c44c2c]">
                    Mission
                  </h2>
                  <p>{item.visionAndMission.mission}</p>
                  <h2 className="text-2xl font-bold mb-4 text-[#c44c2c]">
                    Aims and Objectives
                  </h2>
                  <p>{item.aimsAndObjectives.content}</p>
                  <h2 className="text-2xl font-bold mb-4 text-[#c44c2c]">
                    Objectives
                  </h2>
                  <ul>
                    {item.objectives.mainObjectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UniversityInfo;
