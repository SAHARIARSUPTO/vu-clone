import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Attendance = () => {
  const { studentID } = useParams();
  const [attendanceData, setAttendanceData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [availableClasses, setAvailableClasses] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch(
          `https://vu-server.vercel.app/attendance/${studentID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch attendance data");
        }
        const data = await response.json();
        setAttendanceData(data);
        const uniqueClasses = [...new Set(data.map((item) => item.class_name))];
        setAvailableClasses(uniqueClasses.filter(Boolean));
      } catch (error) {
        console.error("Error fetching attendance data:", error);
        setError("Failed to fetch attendance data");
      }
    };

    fetchAttendanceData();
  }, [studentID]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const filteredAttendanceData = attendanceData.filter(
    (item) =>
      (!selectedDate || item.date === selectedDate) &&
      (!selectedClass || item.class_name === selectedClass)
  );

  // Function to calculate total classes for each subject
  const calculateTotalClassesBySubject = () => {
    const totalClassesBySubject = {};
    attendanceData.forEach((attendance) => {
      if (attendance.class_name) {
        if (!totalClassesBySubject[attendance.class_name]) {
          totalClassesBySubject[attendance.class_name] = 1;
        } else {
          totalClassesBySubject[attendance.class_name]++;
        }
      }
    });
    return totalClassesBySubject;
  };

  // Function to calculate total classes in different classes
  const calculateTotalClassesInDifferentClasses = () => {
    const totalClassesInDifferentClasses = attendanceData.filter(
      (attendance) => attendance.class_name !== null
    ).length;
    return totalClassesInDifferentClasses;
  };

  const totalClassesBySubject = calculateTotalClassesBySubject();
  const totalClassesInDifferentClasses =
    calculateTotalClassesInDifferentClasses();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Attendance for Student ID: {studentID}
      </h1>
      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Total Classes for Each Subject:
          </h2>
          {Object.entries(totalClassesBySubject).map(
            ([subject, total], index) => (
              <div key={index} className="bg-white p-3 mb-2 rounded-lg">
                <p className="text-blue-600">
                  {subject}: {total}
                </p>
              </div>
            )
          )}
        </div>

        <div className="bg-green-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Total Subject Classes in Different Classes:
          </h2>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-green-600">{totalClassesInDifferentClasses}</p>
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Discollegiate Courses:</h2>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-yellow-600">
              {/* Count discollegiate courses and display */}
              {attendanceData.filter((item) => !item.class_name).length}
            </p>
          </div>
        </div>

        <div className="bg-red-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Non-colligiate Courses:
          </h2>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-red-600">
              {/* Count non-colligiate courses and display */}
              {attendanceData.filter((item) => item.class_name === null).length}
            </p>
          </div>
        </div>

        <div className="bg-purple-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Best Attended Course:</h2>
          <div className="bg-white p-3 rounded-lg">
            {/* Add functionality here */}
            <p>0</p>
          </div>
        </div>

        <div className="bg-indigo-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Improvement Courses: </h2>
          <div className="bg-white p-3 rounded-lg">
            {/* Add functionality here */}
            <p>0</p>
          </div>
        </div>

        <div className="bg-pink-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Retake Courses:</h2>
          <div className="bg-white p-3 rounded-lg">
            {/* Add functionality here */}
            <p>0</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Filter Attendance:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
          <div>
            <label htmlFor="date">Select Date:</label>
            <select
              id="date"
              className="border border-gray-300 rounded-md p-1 w-full"
              value={selectedDate}
              onChange={handleDateChange}
            >
              <option value="">All</option>
              {attendanceData.map((item) => (
                <option key={item._id} value={item.date}>
                  {item.date}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="class">Select Class:</label>
            <select
              id="class"
              className="border border-gray-300 rounded-md p-1 w-full"
              value={selectedClass}
              onChange={handleClassChange}
            >
              <option value="">All</option>
              {availableClasses.map((className, index) => (
                <option key={index} value={className}>
                  {className}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2 bg-indigo-200 p-4 rounded-lg">
          Attendance Details:
        </h2>
        <ul>
          {filteredAttendanceData.map((attendance, index) => (
            <li key={index} className="bg-yellow-200 rounded-lg p-2 mb-2">
              <p>
                <span className="font-semibold">Class Name:</span>{" "}
                {attendance.class_name}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {attendance.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attendance;
