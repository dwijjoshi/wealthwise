import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PaymentMethods.css";
import AccountTabs from "../../layout/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import Transactions from "../Transaction/Transaction";

const PaymentDashboard = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [defaultCardId, setDefaultCardId] = useState(null);
  const navigate = useNavigate();

  const fetchPaymentMethods = async () => {
    try {
      const { data } = await axios.get(
        "https://wealthwise-sdlm.onrender.com/api/v1/all-cards", //
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if (data && Array.isArray(data.cards)) {
        setPaymentMethods(data.cards);
        const defaultCard = data.cards.find((pm) => pm.default);
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
      console.log(data);
      setPaymentMethods(data.cards);
      setDefaultCardId(id);
    } catch (err) {
      console.error("Failed to update card", err);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

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
                className="w-70 bg-white border border-gray-300 rounded-xl p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <img
                    src={pm.number.slice(0, 1) == "4" ? visa : mastercard}
                    alt={pm.type}
                    className="w-12 h-10"
                  />
                  <div className="flex flex-wrap">
                    <div className="text-sm text-gray-700 flex gap-2">
                      <p>Card No.</p>
                      <p className="text-md font-semibold text-red">
                        {pm.number}
                      </p>
                    </div>
                    <div className="text-sm text-gray-700 flex gap-2">
                      <p>Expiry Date</p>
                      <p className="text-md font-semibold">{pm.expiry}</p>
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
        <div className="overflow-auto">
          <Transactions />
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
