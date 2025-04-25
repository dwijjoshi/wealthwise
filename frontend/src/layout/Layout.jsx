import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../pages/Profile/Profile";
import Topbar from "../components/Topbar";

const Layout = () => {
  return (
    <div className="flex bg-[#dee4de95]">
      <Sidebar />
      <div className="w-full">
        <Topbar />
        <div>Other Components</div>
      </div>
    </div>
  );
};

export default Layout;
