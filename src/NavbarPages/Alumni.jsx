import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alumni = () => {
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    message: "",
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://vu-server.vercel.app/alumni");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Error fetching posts. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://vu-server.vercel.app/alumni",
        formData
      );
      console.log("Post added successfully", response.data);
      toast.success("Post added successfully!");
      setFormData({ name: "", batch: "", message: "" }); // Reset form
      fetchPosts(); // Refresh posts
    } catch (error) {
      console.error("Error adding post", error);
      toast.error("Error adding post. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#c44c2c]">Alumni Page</h1>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Post a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Batch
              </label>
              <input
                type="text"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Batch"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#c44c2c] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#c44c2c]">
            Alumni Posts
          </h2>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <img
                    src="https://p1.hiclipart.com/preview/564/726/326/button-ui-system-icons-contacts-unknown-human-profile-illustration-png-clipart.jpg"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-lg font-semibold">{post.name}</p>
                    <p className="text-sm text-gray-600">Batch: {post.batch}</p>
                  </div>
                </div>
                <p className="text-gray-800">{post.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni;
