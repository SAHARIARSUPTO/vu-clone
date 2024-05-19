import { useState, useEffect } from "react";

const BusPassBusspassRecord = () => {
  const [busPasses, setBusPasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch("https://vu-server.vercel.app/busspass")
      .then((response) => response.json())
      .then((data) => {
        setBusPasses(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    // Render loading UI while fetching data
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#c44c2c] animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-2">
              Bus Pass BusspassRecords
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                    >
                      Student ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                    >
                      Semester
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                    >
                      Route
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                    >
                      Contact Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {busPasses.map((pass, index) => (
                    <tr
                      key={pass._id}
                      className={index % 2 === 0 ? "bg-rose-100" : ""}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {pass.studentID || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {pass.semester || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {pass.department || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {pass.route || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {pass.contactNumber || "N/A"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusPassBusspassRecord;
