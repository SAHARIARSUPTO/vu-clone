import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const NoticeBoard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch("https://vu-server.vercel.app/notice_board")
      .then((response) => response.json())
      .then((data) => {
        // Sort documents by date in descending order (newest first)
        const sortedData = data.sort(
          (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
        );
        setFiles(sortedData);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter files based on search query
  const filteredFiles = files.filter((file) =>
    file.fileName.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort files based on selected department
  const sortedFiles =
    selectedDept === "All"
      ? filteredFiles
      : filteredFiles.filter((file) => file.dept === selectedDept);

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
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-lg font-semibold mb-2">Notice Board</h2>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#c44c2c]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                  className="ml-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#c44c2c]"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  <option value="All">All Departments</option>
                  <option value="CSE">CSE</option>
                  <option value="BBA">BBA</option>
                  <option value="Social Science">Social Science</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                      >
                        File Name (English)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                      >
                        File Name (Bangla)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                      >
                        Update Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white bg-[#c44c2c] uppercase tracking-wider"
                      >
                        Serial
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
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedFiles.map((file, index) => (
                      <tr
                        key={file.serial}
                        className={index % 2 === 0 ? "bg-rose-100" : ""}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-5 w-5 text-[#c44c2c]">
                              <FontAwesomeIcon icon={faFile} />
                            </div>
                            <div className="ml-3 text-sm font-medium text-gray-900">
                              {file.fileName.english}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {file.fileName.bangla}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {file.updateDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {file.serial}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {file.dept}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href={`http://localhost:3000/files/${file.fileName.english}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c44c2c] hover:text-indigo-900"
                          >
                            <FontAwesomeIcon
                              icon={faDownload}
                              className="mr-1 text-[#c44c2c]"
                            />
                            Download
                          </a>
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
    </>
  );
};

export default NoticeBoard;
