import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecurringBills.css";

const RecurringBills = () => {
  const [formData, setFormData] = useState({
    name: "Netflix",
    category: "",
    amount: "₹ 450",
    frequency: "",
    startDate: "2025-09-12",
    endDate: "2026-12-20",
    account: "",
    autoPay: true,
  });

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const res = await axios.get(
        "https://wealthwise-sdlm.onrender.com/api/v1/bills"
      );
      setTransactions(res.data.bills);
    } catch (err) {
      console.error("Error fetching bills:", err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://wealthwise-sdlm.onrender.com/api/v1/bills/add",
        formData
      );
      //fetchBills(); // Refresh transactions
    } catch (err) {
      console.error("Error adding bill:", err);
    }
  };

  return (
    <div className="bill-container poppins-text p-4 bg-white rounded-md">
      <h2 className="text-xl font-semibold mb-4">Recurring Bills</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label>Name :</label>
          <input
            className="input-box"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label>Category :</label>
          <select
            className="input-box"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option>Ex. Subscription</option>
            <option>Streaming</option>
            <option>Utilities</option>
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input
            className="input-box"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>

        <div>
          <label>Frequency :</label>
          <select
            className="input-box"
            value={formData.frequency}
            onChange={(e) =>
              setFormData({ ...formData, frequency: e.target.value })
            }
          >
            <option>Ex. Monthly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div>
          <label>Start Date</label>
          <input
            className="input-box"
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />
        </div>
        <div>
          <label>End Date :</label>
          <input
            className="input-box"
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
          />
        </div>

        <div>
          <label>Linked Account :</label>
          <select
            className="input-box"
            value={formData.account}
            onChange={(e) =>
              setFormData({ ...formData, account: e.target.value })
            }
          >
            <option>Ex. AGC- XXXXXX</option>
            <option>SBI - 123456</option>
            <option>ICICI - 987654</option>
          </select>
        </div>

        <div className="flex items-center mt-6">
          <label className="mr-2">Auto Payment :</label>
          <input
            type="checkbox"
            checked={formData.autoPay}
            onChange={(e) =>
              setFormData({ ...formData, autoPay: e.target.checked })
            }
            className="form-toggle"
          />
        </div>
        <div className="mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Add New Bill
          </button>
        </div>
      </div>

      <hr className="my-6 text-gray-300" />

      <div className="transaction-section">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Latest Transaction History</h3>
          <span className="text-sm text-purple-600 cursor-pointer">
            View more details
          </span>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Category</th>
              <th>Amount</th>
              <th>Frequency</th>
              <th>Next Due</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} className="border-b  border-gray-300">
                <td>{txn.category}</td>
                <td>{txn.amount}</td>
                <td>{txn.frequency}</td>
                <td>{new Date(txn.startDate).toLocaleDateString()}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      txn.status === "Confirmed"
                        ? "bg-green-500"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td>
                  <span className="text-blue-700 mr-2 cursor-pointer">
                    Edit
                  </span>{" "}
                  /
                  <span className="text-red-600 ml-2 cursor-pointer">
                    Delete
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

export default RecurringBills;
