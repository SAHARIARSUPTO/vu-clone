import { Outlet, Link } from "react-router-dom";

const AdminIndex = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white">
          <nav className="flex flex-col p-4">
            <Link
              to="/admin_panel/notice"
              className="mb-4 hover:bg-gray-700 p-2 rounded"
            >
              Notice Board
            </Link>
            <Link
              to="/admin_panel/admission"
              className="mb-4 hover:bg-gray-700 p-2 rounded"
            >
              New Admission
            </Link>
            <Link
              to="/admin_panel/buspass"
              className="mb-4 hover:bg-gray-700 p-2 rounded"
            >
              Bus Pass Application
            </Link>
            <Link
              to="/admin_panel/feedback"
              className="mb-4 hover:bg-gray-700 p-2 rounded"
            >
              Feedbacks
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminIndex;
