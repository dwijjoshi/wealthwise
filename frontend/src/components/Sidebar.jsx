import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-4 pl-6 w-64 sticky top-0">
      <div className="flex items-center mb-6 gap-x-2">
        <img className="h-[47px] w-[60px]" src="/logo.png" alt="" />
        <div className="font-semibold text-[20px]">
          <span className="text-[#0068FF]">WEALTH</span>
          <span className="text-[#11FF09]">WISE</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        <div>
          <h2 className="text-gray-500/70 text-sm mb-6 tracking-wide">
            Manage
          </h2>
          <nav className="flex flex-col gap-4 gap-y-4">
            <NavLink
              end
              to="/dashboard/"
              className="flex nav-link gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              {({ isActive }) => (
                <>
                  <img
                    className="h-5 w-5"
                    src={
                      isActive ? "/dashboard-white.png" : "/DashboardIcon.png"
                    }
                    alt=""
                  />
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/dashboard/my-cards"
              className="flex nav-link gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Card icon'.png" alt="" />
              My Cards
            </NavLink>
            <NavLink
              to="/dashboard/transactions"
              className="flex nav-link gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              {({ isActive }) => (
                <>
                  <img
                    className="h-5 w-5"
                    src={
                      isActive ? "/transaction-white.png" : "/Transcation.png"
                    }
                    alt=""
                  />
                  <span>Transaction</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/dashboard/recurring-bills"
              className="flex nav-link gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              {({ isActive }) => (
                <>
                  <img
                    className="h-5 w-5"
                    src={isActive ? "/RBW.png" : "/Recurring bills.png"}
                    alt=""
                  />
                  <span>Recurring bills</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/dashboard/analytics"
              className="flex nav-link gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Analytics icon.png" alt="" />
              Analytics
            </NavLink>
            <NavLink
              to="/dashboard/profile"
              className="flex nav-link gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Settings icon.png" alt="" />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
