import { useState, useEffect } from "react";
import axios from "axios";
import "./RecurringBills.css";

export default function RecurringBills() {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    amount: "",
    frequency: "",
    startDate: "",
    endDate: "",
    linkedAccount: "",
    autoPayment: false,
  });

  const fetchBills = async () => {
    const res = await axios.get(
      "https://wealthwise-sdlm.onrender.com/api/bills"
    );
    setBills(res.data);
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://wealthwise-sdlm.onrender.com/api/bills", form);
    fetchBills();
    setForm({
      name: "",
      category: "",
      amount: "",
      frequency: "",
      startDate: "",
      endDate: "",
      linkedAccount: "",
      autoPayment: false,
    });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow border max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Recurring Bills</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name :</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Netflix"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category :</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Ex. Subscription</option>
            <option value="Subscription">Subscription</option>
            <option value="Utilities">Utilities</option>
            <option value="Loan">Loan</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Amount :</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="₹ 450"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Frequency :</label>
          <select
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Ex. Monthly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Start Date :</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date :</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Linked Account :
          </label>
          <select
            name="linkedAccount"
            value={form.linkedAccount}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Ex. AGC-XXXXXX</option>
            <option value="AGC-123456">AGC-123456</option>
            <option value="AGC-987654">AGC-987654</option>
          </select>
        </div>
        <div className="flex items-center col-span-2 mt-6">
          <label className="mr-2 text-sm font-medium">Auto Payment :</label>
          <input
            type="checkbox"
            name="autoPayment"
            checked={form.autoPayment}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
          />
        </div>
        <div className="col-span-1 mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add New Bill
          </button>
        </div>
      </form>

      <hr className="my-6" />

      <div>
        <h3 className="text-lg font-semibold mb-2">
          Latest Transaction History
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Frequency</th>
                <th className="py-2 px-4">Next Due</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill._id} className="border-b">
                  <td className="py-2 px-4">{bill.name}</td>
                  <td className="py-2 px-4">₹ {bill.amount}</td>
                  <td className="py-2 px-4">{bill.frequency}</td>
                  <td className="py-2 px-4">{bill.startDate}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs font-semibold ${
                        bill.status === "Confirmed"
                          ? "bg-green-500"
                          : bill.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {bill.status || "Pending"}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-sm">
                    <span className="text-blue-600 cursor-pointer mr-2">
                      Edit
                    </span>
                    <span className="text-red-600 cursor-pointer">Delete</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-right text-xs mt-2 text-purple-700 cursor-pointer">
          View more details
        </div>
      </div>
    </div>
  );
}
