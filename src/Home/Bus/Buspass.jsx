import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Buspass() {
  const [formData, setFormData] = useState({
    studentID: "",
    semester: "",
    department: "",
    route: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vu-server.vercel.app/busspass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      // Reset form data after successful submission
      setFormData({
        studentID: "",
        semester: "",
        department: "",
        route: "",
        contactNumber: "",
      });

      // Show success toast
      toast.success("Form submitted successfully");

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-20 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div className="mb-4">
            <label htmlFor="studentID" className="block mb-1">
              Student ID
            </label>
            <input
              type="text"
              id="studentID"
              name="studentID"
              value={formData.studentID}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="semester" className="block mb-1">
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="1">Semester 3</option>
              <option value="2">Semester 4</option>
              <option value="1">Semester 5</option>
              <option value="2">Semester 6</option>
              <option value="2">Semester 7</option>
              <option value="2">Semester 8</option>
              <option value="2">Semester 9</option>
              <option value="2">Semester 10</option>
              <option value="2">Semester 11</option>
              <option value="2">Semester 12</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block mb-1">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 md:col-span-2 lg:col-span-3">
            <label htmlFor="route" className="block mb-1">
              Route Name
            </label>
            <input
              type="text"
              id="route"
              name="route"
              value={formData.route}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block mb-1">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className="bg-[#c44c2c] text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
        {/* Toast container */}
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default Buspass;
