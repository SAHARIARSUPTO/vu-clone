import { useState } from "react";

const Bloodline = () => {
  const [seekerForm, setSeekerForm] = useState({
    studentId: "",
    semester: "",
    age: "",
    weight: "",
    bloodGroup: "",
    department: "",
    contactNumber: "",
    location: "",
    urgency: "",
    // Add more fields as needed
  });

  const [donorForm, setDonorForm] = useState({
    studentId: "",
    semester: "",
    age: "",
    weight: "",
    bloodGroup: "",
    department: "",
    contactNumber: "",
    location: "",
    availability: "",
    // Add more fields as needed
  });

  const handleSeekerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(seekerForm),
      });
      if (response.ok) {
        // Seeker form data submitted successfully
        console.log("Seeker form data submitted successfully");
      } else {
        console.error("Failed to submit seeker form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDonorSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donorForm),
      });
      if (response.ok) {
        // Donor form data submitted successfully
        console.log("Donor form data submitted successfully");
      } else {
        console.error("Failed to submit donor form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-semibold mb-4 text-red-600">
          Bloodline Page
        </h1>

        {/* Seeker Form */}
        <form onSubmit={handleSeekerSubmit} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Seek Blood</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="studentId" className="mb-1">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={seekerForm.studentId}
              onChange={(e) =>
                setSeekerForm({ ...seekerForm, studentId: e.target.value })
              }
              required
            />
          </div>
          {/* Add more form fields for seeker as needed */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        {/* Donor Form */}
        <form onSubmit={handleDonorSubmit}>
          <h2 className="text-xl font-semibold mb-2">Donate Blood</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="studentId" className="mb-1">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={donorForm.studentId}
              onChange={(e) =>
                setDonorForm({ ...donorForm, studentId: e.target.value })
              }
              required
            />
          </div>
          {/* Add more form fields for donor as needed */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Bloodline;
