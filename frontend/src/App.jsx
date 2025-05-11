import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./components/Sidebar";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home/HomePage.jsx";
import RecurringBills from "./pages/Recurring Bills/RecurringBills";

import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "./slices/userSlice";
import Transactions from "./pages/Transaction/Transaction";
import AddTransaction from "./pages/AddTransaction/AddTransaction";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyCards from "./pages/MyCards/MyCards.jsx";
import AddCard from "./pages/AddCard/AddCard.jsx";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await axios.get(
          "https://wealthwise-sdlm.onrender.com/api/v1/me",
          {
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.data.success) {
          dispatch(saveUser(res.data.user));
        }
      } catch (error) {
        console.error("User not found");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="transaction/:id" element={<AddTransaction />} />
            <Route path="add-transaction" element={<AddTransaction />} />
            <Route path="recurring-bills" element={<RecurringBills />} />
            <Route path="my-cards" element={<MyCards />} />
            <Route path="add-card" element={<AddCard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
