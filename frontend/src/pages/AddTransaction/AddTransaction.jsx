import { useEffect, useState } from "react";
import "./AddTransaction.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../slices/userSlice";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    username: "",
    amount: "",
    type: "income",
    status: "confirmed",
    note: "",
    account: "",
    date: new Date().toISOString().split("T")[0], // Default to today
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  const { user } = useSelector((state) => state.user);
  console.log(user, "user");

  useEffect(() => {
    if (id) {
      console.log("in id");
      const fetchTransaction = async () => {
        try {
          const res = await axios.get(
            `https://wealthwise-sdlm.onrender.com/api/v1/transaction/${id}`,
            { withCredentials: true }
          );

          if (res.data.success) {
            const { _id, date, ...rest } = res.data.transaction;
            setFormData({
              ...rest,
              date: moment(date).format("YYYY-MM-DD"),
            });
          }
        } catch (error) {}
      };
      fetchTransaction();
    }
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        console.log(formData);
        const res = await axios.put(
          `https://wealthwise-sdlm.onrender.com/api/v1/transaction/${id}`,
          formData,
          { withCredentials: true }
        );
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/dashboard/transactions");
          dispatch(saveUser(res.data.user));
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        console.log(formData);
        const res = await axios.post(
          "https://wealthwise-sdlm.onrender.com/api/v1/transaction",
          formData,
          { withCredentials: true }
        );
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/dashboard/transactions");
          dispatch(saveUser(res.data.user));
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Toaster />
      <div className=" mx-auto add-transaction-container bg-white p-6 rounded shadow mt-8">
        <h2 className="text-xl font-semibold mb-4">
          {id ? "Update Transaction" : "Add Transaction"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Note</label>
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Account</label>
            <select
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              {user?.cards?.map((card) => (
                <option value={card.number}>{card.number}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex items-end justify-end w-[80%]">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
            >
              {id ? "Update Transaction" : "Add Transaction"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
