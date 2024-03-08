import React from "react";

const Results = () => {
  // Sample data for demonstration
  const resultsData = [
    {
      semester: 1,
      subjects: [
        { name: "Mathematics", grade: "A", credits: 3 },
        { name: "Physics", grade: "B+", credits: 4 },
        // Add more subjects for each semester
      ],
    },
    {
      semester: 2,
      subjects: [
        { name: "Chemistry", grade: "A-", credits: 3 },
        { name: "Biology", grade: "B", credits: 4 },
        // Add more subjects for each semester
      ],
    },
    // Add more semesters
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Semester</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Grade</th>
            <th className="px-4 py-2">Credits</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((semesterData) => (
            <React.Fragment key={semesterData.semester}>
              <tr>
                <td
                  className="border px-4 py-2"
                  rowSpan={semesterData.subjects.length + 1}
                >
                  Semester {semesterData.semester}
                </td>
              </tr>
              {semesterData.subjects.map((subject, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{subject.name}</td>
                  <td className="border px-4 py-2">{subject.grade}</td>
                  <td className="border px-4 py-2">{subject.credits}</td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2 font-bold">
                  Average CGPA for Semester {semesterData.semester}
                </td>
                <td className="border px-4 py-2" colSpan="3">
                  {/* Calculate average CGPA for this semester */}
                  {calculateAverageCGPA(semesterData.subjects)}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Function to calculate average CGPA for a semester
const calculateAverageCGPA = (subjects) => {
  // Calculate total grade points
  const totalGradePoints = subjects.reduce((acc, subject) => {
    // Convert grade to grade points (you need to define a conversion logic)
    const gradePoints = convertGradeToGradePoints(subject.grade);
    return acc + gradePoints * subject.credits;
  }, 0);

  // Calculate total credits
  const totalCredits = subjects.reduce(
    (acc, subject) => acc + subject.credits,
    0
  );

  // Calculate average CGPA
  const averageCGPA = totalGradePoints / totalCredits; // This is a simplified calculation, you may need to adjust based on your grading system

  return averageCGPA.toFixed(2); // Return the average CGPA rounded to 2 decimal places
};

// Function to convert grade to grade points (you need to define this based on your grading system)
const convertGradeToGradePoints = (grade) => {
  // Define your conversion logic here
  // For example:
  // if (grade === 'A') {
  //   return 4.0;
  // } else if (grade === 'B') {
  //   return 3.0;
  // } // Add more conditions for other grades
};

export default Results;
