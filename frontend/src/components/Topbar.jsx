import { FaSearch, FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Topbar() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="flex items-center justify-between p-4">
      <div className="px-8">
        <h1 className="text-lg font-semibold">Welcome, {user?.userName}</h1>
        <p className="text-gray-500 text-xs">
          Let's see what's happening with your account
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center px-4 py-2 w-80">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent text-sm w-full input-width"
          />
        </div>

        <div className="relative">
          <img src="/bell icon.png" className="h-8 w-8" alt="" />
        </div>

        <Link to="/dashboard/profile">
          <img
            src="/profilepic.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
