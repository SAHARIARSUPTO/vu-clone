import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DepartmentCards() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://vu-server.vercel.app/departments")
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => console.error("Error fetching departments:", error));
  }, []);

  if (loading) {
    // Render loading UI while fetching data
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
      <div className="department-cards container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {departments.map((department) => (
          <div
            key={department.deptName}
            className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={department.image}
              className="w-2/4 text-center items-center mx-auto"
              alt={department.deptName}
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h5 className="text-xl font-semibold mb-2">
                  {department.deptName}
                </h5>
              </div>
              <div className="mt-4">
                <Link
                  to={`/department/${encodeURIComponent(department._id)}`}
                  className="block w-full text-center bg-[#c44c2c] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DepartmentCards;
