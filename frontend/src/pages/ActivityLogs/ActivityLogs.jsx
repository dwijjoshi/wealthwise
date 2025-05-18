import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountTabs from "../../layout/Tabs";
import moment from "moment";

const months = [
  { label: "All", value: "all" },
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

const ActivityLog = () => {
  const [activityData, setActivityData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActivityLogs = async () => {
      try {
        const res = await axios.get(
          "https://wealthwise-sdlm.onrender.com/api/v1/activity-logs",
          {
            withCredentials: true,
          }
        );
        setActivityData(res.data.acitivityLogs || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch activity logs.");
        setLoading(false);
      }
    };

    fetchActivityLogs();
  }, []);

  return (
    <div className="p-6 bg-white rounded-md shadow poppins-text">
      <AccountTabs />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold mb-1">Activity log</h2>
        <div className="mb-4 flex items-center gap-x-2">
          <label>Month :</label>
          <select
            className="p-2 rounded border"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sub-heading w-full mb-10">
        <p className="text-gray-600 text-sm">Activity Logs History</p>
        <p className="text-gray-500 text-xs mt-1 ">
          This History keeps an eye on all actions taken on your account...
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
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
                  <td className="px-4 py-2">
                    {moment(log.date).format("DD-MMM-YYYY HH:MM:SS")}
                  </td>
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
      )}
    </div>
  );
};

export default ActivityLog;
