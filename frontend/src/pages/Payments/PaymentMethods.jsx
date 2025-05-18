import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PaymentMethods.css";
import AccountTabs from "../../layout/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";

const PaymentDashboard = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [defaultCardId, setDefaultCardId] = useState(null);
  const navigate = useNavigate();

  const fetchPaymentMethods = async () => {
    try {
      const { data } = await axios.get(
        "https://wealthwise-sdlm.onrender.com/api/v1/payment-method", //
        {
          withCredentials: true,
        }
      );

      if (data && Array.isArray(data.paymentMethods)) {
        setPaymentMethods(data.paymentMethods);
        const defaultCard = data.paymentMethods.find((pm) => pm.isDefault);
        setDefaultCardId(defaultCard?._id || null);
      } else {
        console.error("Unexpected API response format:", data);
        setPaymentMethods([]);
      }
    } catch (err) {
      console.error("Failed to fetch payment methods", err);
      setPaymentMethods([]);
    }
  };

  const deletePaymentMethod = async (id) => {
    try {
      await axios.delete(
        `https://wealthwise-sdlm.onrender.com/api/v1/payment-method/${id}`,
        {
          withCredentials: true,
        }
      );
      fetchPaymentMethods();
    } catch (err) {
      console.error("Failed to delete card", err);
    }
  };

  const handleSetDefault = async (id) => {
    try {
      const { data } = await axios.put(
        `https://wealthwise-sdlm.onrender.com/api/v1/payment-method/${id}`,
        { isDefault: true },
        { withCredentials: true }
      );
      setPaymentMethods(data.paymentMethods);
      setDefaultCardId(id);
    } catch (err) {
      console.error("Failed to update card", err);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const transactions = [
    {
      user: "Maged Ycusri",
      id: "ABC - 20158",
      account: "......489",
      date: "02/09/2024",
      amount: "₹1400",
      status: "Confirmed",
    },
    {
      user: "Omar Ahmed",
      id: "XCV- 14158",
      account: "......587",
      date: "12/09/2024",
      amount: "₹3200",
      status: "Pending",
    },
    {
      user: "Amazon",
      id: "ANM - 15558",
      account: "......122",
      date: "13/09/2024",
      amount: "₹8500",
      status: "Confirmed",
    },
    {
      user: "Netflix",
      id: "ABC - 20158",
      account: "......789",
      date: "30/09/2024",
      amount: "₹1600",
      status: "Confirmed",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans text-gray-800 bg-gray-50 rounded-xl shadow-md poppins-text">
      <AccountTabs />

      {/* Linked Cards */}
      <div className="mt-6 linked-cards-container">
        <div className="heading-section flex justify-between items-center gap-10 mb-5">
          <h2 className="text-xl font-semibold mb-1 poppins-text">
            Linked cards
          </h2>
          <button
            onClick={() => navigate("/dashboard/my-cards")}
            className="w-50 h-10 bg-blue-600 text-white px-4 py-2  cursor-pointer  rounded-md add-payment-btn"
          >
            Add Payment Method
          </button>
        </div>

        <div className="card-content flex gap-4 flex-wrap">
          {paymentMethods.length === 0 ? (
            <p className="text-gray-600">No payment methods linked.</p>
          ) : (
            paymentMethods.map((pm) => (
              <div
                key={pm._id}
                className="w-80 bg-white border border-gray-300 rounded-xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <img
                    src={pm.type === "visa" ? visa : mastercard}
                    alt={pm.type}
                    className="w-12 h-10"
                  />
                  <div className="flex flex-wrap">
                    <div className="text-sm text-gray-700 flex gap-2">
                      <p>Card No.</p>
                      <p className="text-lg font-semibold text-red">
                        **** **** **** {pm.details.last4}
                      </p>
                    </div>
                    <div className="text-sm text-gray-700 flex gap-2">
                      <p>Expiry Date</p>
                      <p className="text-lg font-semibold">
                        {pm.details.expiry}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    className={`text-xs border px-3 py-1 rounded-full font-medium ${
                      defaultCardId === pm._id
                        ? "bg-purple-100 text-purple-700 border-purple-300"
                        : "text-purple-700 border-purple-300"
                    }`}
                    onClick={() => handleSetDefault(pm._id)}
                  >
                    {defaultCardId === pm._id
                      ? "✓ Default Card"
                      : "✓ Set as Default"}
                  </button>
                  <div className="flex gap-3 text-sm">
                    <button className="text-blue-600">Edit</button>
                    <button
                      className="text-red-500"
                      onClick={() => deletePaymentMethod(pm._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Transaction History */}
      <div className="mt-10 transaction-history-container">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold poppins-text">
            Latest Transaction History
          </h2>
          <button className="text-purple-700 text-sm font-medium poppins-text  cursor-pointer">
            View more details
          </button>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-left text-sm border-separate border-spacing-y-2">
            <thead className="text-gray-600">
              <tr>
                <th>User name</th>
                <th>Transaction - ID</th>
                <th>Account</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="bg-white">
                  <td className="py-2">{tx.user}</td>
                  <td>{tx.id}</td>
                  <td>{tx.account}</td>
                  <td>{tx.date}</td>
                  <td>{tx.amount}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tx.status === "Confirmed"
                          ? "bg-green-400 text-white"
                          : "bg-yellow-400 text-white"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Billing Address */}
      <div className="mt-10 p-4 bg-white rounded-xl ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold poppins-text">
            Billing Address
          </h2>
          <button className="text-purple-700 text-sm font-medium poppins-text  cursor-pointer">
            View more details
          </button>
        </div>
        <div className="flex gap-10">
          <p className="text-sm text-gray-600 mt-4 w-75">
            It’s used to ensure that you’re the rightful owner of the card while
            online purchase or transaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Current Address</label>
              <input
                type="text"
                value="Anand, Gujarat"
                className="w-full border border-black p-2 rounded-md mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">ZIP / Postal Code</label>
              <input
                type="text"
                value="388001"
                className="w-full border border-black p-2 rounded-md mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboard;
