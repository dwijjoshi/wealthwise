import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";

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

const statusColor = {
  confirmed: "bg-[#6DFF68]",
  cancelled: "bg-[#F65659]",
  pending: "bg-[#FFD884]",
};

const statusText = {
  confirmed: "text-[#096B06]",
  cancelled: "text-[#E01313]",
  pending: "text-[#97450E]",
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransaction, setFilteredTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [isDashboardPage, setIsDashboardPage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTransaction();
  }, []);

  useEffect(() => {
    let getFilteredTransactions = transactions.filter((txn) => {
      if (selectedMonth === "all") return true;
      const txnMonth = moment(txn.date).format("MM"); // "04" for April
      return txnMonth === selectedMonth;
    });
    if (location.pathname === "/dashboard/") {
      console.log("here");
      setIsDashboardPage(true);
      getFilteredTransactions = getFilteredTransactions.slice(0, 5);
    }
    setFilteredTransactions(getFilteredTransactions);
  }, [transactions, selectedMonth]);

  // console.log(location.pathname);

  const getAllTransaction = async () => {
    try {
      const res = await axios.get(
        "https://wealthwise-sdlm.onrender.com/api/v1/transaction",
        {
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.data.success) {
        setTransactions(res.data.transactions);
      }
    } catch (error) {}
  };

  const deleteTransaction = async (id) => {
    try {
      if (id) {
        const res = await axios.delete(
          `https://wealthwise-sdlm.onrender.com/api/v1/transaction/${id}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          getAllTransaction();
          dispatch(saveUser(res.data.user));
          toast.success(res.data.message);
        }
      }
    } catch (error) {
      toast.error(error.data.response.message);
    }
  };
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <Toaster />
      <div className="flex justify-between">
        <h2 className="text-2xl font-normal mb-4">Transaction History</h2>
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-x-2">
            <label htmlFor="">Month :</label>
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
          {!isDashboardPage && (
            <div
              onClick={() => navigate("/dashboard/add-transaction")}
              className="mb-4 bg-green-300 text-green-700 p-2 mx-3 rounded-lg cursor-pointer flex items-center justify-center "
            >
              Add Transaction
            </div>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className=" text-gray-500 text-sm font-extralight">
              <th className="p-3 text-left font-medium">User Name</th>
              <th className="p-3 text-left font-medium">Transaction ID</th>
              <th className="p-3 text-left font-medium">Type</th>
              {!isDashboardPage && (
                <th className="p-3 text-left font-medium">Account</th>
              )}
              <th className="p-3 text-left font-medium">Date</th>
              <th className="p-3 text-left font-medium">Amount</th>
              <th className="p-3 text-left font-medium">Status</th>
              {!isDashboardPage && (
                <th className="p-3 text-left font-medium">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredTransaction?.map((txn, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{txn.username}</td>
                <td className="p-3">{txn._id.slice(-10)}</td>
                <td className="p-3">{txn.type}</td>
                {!isDashboardPage && <td className="p-3">{txn.account}</td>}
                <td className="p-3">{moment(txn.date).format("DD/MM/YYYY")}</td>
                <td className="p-3">₹ {txn.amount}</td>
                <td className="p-3">
                  <spa
                    className={`text-sm px-2 py-1 rounded-md ${
                      statusColor[txn.status]
                    } ${statusText[txn.status]} `}
                  >
                    {txn.status}
                  </spa>
                </td>
                {!isDashboardPage && (
                  <td className="flex p-3 gap-x-2">
                    <div
                      onClick={() =>
                        navigate(`/dashboard/transaction/${txn._id}`)
                      }
                      className="cursor-pointer px-2 py-1 bg-yellow-300 text-yellow-600 rounded-md"
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => deleteTransaction(txn._id)}
                      className="px-2 py-1 cursor-pointer bg-red-300 text-red-600 rounded-md"
                    >
                      Delete
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTransaction.length === 0 ? (
          <div className="flex justify-center w-full py-4">
            No Transactions to show
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Transactions;
