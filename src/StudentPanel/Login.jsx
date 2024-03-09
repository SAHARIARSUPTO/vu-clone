import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    studentID: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation: check if studentID and password are not empty
    if (!credentials.studentID || !credentials.password) {
      setError("Please enter both student ID and password");
      return;
    }

    try {
      const response = await fetch(
        "https://vu-server.vercel.app/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Redirect to attendance page upon successful login
      navigate(`/dashboard/${credentials.studentID}`);
    } catch (error) {
      console.error("Login Error:", error.message);
      setError(error.message || "An error occurred. Please try again later.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const backgroundStyle = {
    backgroundImage:
      'url("https://vu.edu.bd/uploads/media/images/pcampus1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundStyle}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded">
        <div className="text-center pb-5">
          <img
            className="mx-auto w-12"
            src="https://vu.edu.bd/img/iconlogo.png"
            alt="Varendra University Logo"
          />
          <h3 className="text-2xl font-bold text-center text-[#c44c2c]">
            Varendra University
          </h3>
          <p className="text-xl font-bold">STUDENT PANEL</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="studentID">
              Student ID
            </label>
            <input
              type="text"
              placeholder="Student ID"
              id="studentID"
              name="studentID"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={credentials.studentID}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex flex-col items-center justify-between mt-5">
            <button
              type="submit"
              className="w-full rounded px-5 py-2.5 overflow-hidden bg-[#c44c2c] text-white hover:bg-gradient-to-r hover:ring-2 hover:ring-green-400"
            >
              LOG IN
            </button>
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline mt-4"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
