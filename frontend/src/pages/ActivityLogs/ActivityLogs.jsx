import React from "react";
import AccountTabs from "../../layout/Tabs";

const activityData = [
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Anand",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Logged In",
    paymentActivity: "None",
    status: "Successful",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Jaipur",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Payment method",
    paymentActivity: "Received",
    status: "Failed",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Vadodara",
    device: "HP Laptop",
    accountEdit: "Updated Picture",
    activityType: "None",
    paymentActivity: "None",
    status: "Successful",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Udaipur",
    device: "HP Laptop",
    accountEdit: "Password Changed",
    activityType: "None",
    paymentActivity: "None",
    status: "Successful",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Alabama",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "None",
    paymentActivity: "None",
    status: "Failed",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Las Vegas",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Export transaction",
    paymentActivity: "Received",
    status: "Failed",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Texas",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Payment method",
    paymentActivity: "Received",
    status: "Failed",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Kerala",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Payment method",
    paymentActivity: "Received",
    status: "Failed",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Anand",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Payment method",
    paymentActivity: "Received",
    status: "Failed",
  },
  {
    dateTime: "02-SEP-2024 07:30 PM",
    location: "Texas",
    device: "HP Laptop",
    accountEdit: "None",
    activityType: "Payment method",
    paymentActivity: "Sent",
    status: "Failed",
  },
];

const ActivityLog = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow poppins-text">
      <AccountTabs />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold mb-1">Activity log</h2>
        <div className="flex items-center gap-2 text-gray-700 border rounded px-3 py-1 cursor-pointer hover:bg-gray-100">
          <span>&lt;</span>
          <span>September</span>
          <span>&gt;</span>
        </div>
      </div>
      <div className="sub-heading w-full mb-10">
        <p className="text-gray-600 text-sm">Activity Logs History</p>
        <p className="text-gray-500 text-xs mt-1 ">
          This History keeps an eye on off actions taken on your account each
          better experience. From logins to payment update, Pris log provides a
          clear record of your recent activity. Review details like the date,
          time and location of each action to ensure your account's security and
          transparency. Filter by activity type or download your log for
          personal records.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-sm text-left text-gray-600">
            <tr>
              <th className="px-4 py-2 font-medium">Date & Time</th>
              <th className="px-4 py-2 font-medium">Location</th>
              <th className="px-4 py-2 font-medium">Device</th>
              <th className="px-4 py-2 font-medium">Account Edit</th>
              <th className="px-4 py-2 font-medium">Activity Type</th>
              <th className="px-4 py-2 font-medium">Payment Activity</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((log, index) => (
              <tr key={index} className="border-b text-sm">
                <td className="px-4 py-2">{log.dateTime}</td>
                <td className="px-4 py-2">{log.location}</td>
                <td className="px-4 py-2">{log.device}</td>
                <td className="px-4 py-2">{log.accountEdit}</td>
                <td className="px-4 py-2">{log.activityType}</td>
                <td className="px-4 py-2">{log.paymentActivity}</td>
                <td className="px-4 py-2 font-medium">
                  <span
                    className={`${
                      log.status === "Successful"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
