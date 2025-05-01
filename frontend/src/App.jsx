import { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./components/Sidebar";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage.jsx";
import RecurringBills from "./pages/Recurring Bills/RecurringBills";

import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "./slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/me", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(saveUser(res.data.user));
      }
    };
    loadUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="recurring-bills" element={<RecurringBills />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
