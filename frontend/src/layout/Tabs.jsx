import { useLocation, useNavigate } from "react-router-dom";

const AccountTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payment Methods", path: "/dashboard/payments" },
    { label: "Linked Accounts", path: "/dashboard/linked-accounts" },
    { label: "Activity Log", path: "/dashboard/activity-log" },
  ];

  return (
    <div className="tab-container flex gap-4 mb-6 border-b pb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => navigate(tab.path)}
          className={`px-4 py-2 rounded ${
            location.pathname === tab.path
              ? "bg-blue-600 text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default AccountTabs;
