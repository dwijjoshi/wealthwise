import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../pages/Profile/Profile";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../slices/userSlice";
import axios from "axios";

const Layout = () => {
  return (
    <div className="flex bg-[#e4e3e367]">
      <Sidebar />
      <div className="w-full px-6">
        <Topbar />
        <div className="bg-white ml-6 rounded-xl mb-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
