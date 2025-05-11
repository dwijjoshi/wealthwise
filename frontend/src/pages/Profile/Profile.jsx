import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { saveUser } from "../../slices/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AccountTabs from "../../layout/Tabs.jsx";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user);
  const dispatch = useDispatch();

  const [updateUserData, setUpdateUserData] = useState({
    userName: "",
    email: "",
    name: "",
    phoneNumber: "",
    dateOfBirth: null,
    address: "",
    currentJob: "",
    placeOfWork: "",
  });

  useEffect(() => {
    if (user) {
      setUpdateUserData({
        userName: user.userName || "",
        email: user.email || "",
        name: user.name || "",
        phoneNumber: user.phoneNumber || "",
        dateOfBirth: user.dateOfBirth || null,
        address: user.address || "",
        currentJob: user.currentJob || "",
        placeOfWork: user.placeOfWork || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setUpdateUserData({
      ...updateUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        "https://wealthwise-sdlm.onrender.com/api/v1/updateUser",
        updateUserData,
        { withCredentials: true }
      );

      if (res.data.success) {
        dispatch(saveUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const res = await axios.delete(
        "https://wealthwise-sdlm.onrender.com/api/v1/deleteAccount",
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans text-gray-800 bg-gray-50 rounded-xl shadow-md  poppins-text">
      <AccountTabs />
      <div className="flex px-4 profile">
        <Toaster />

        <div className="flex-2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1 poppins-text">
              Profile Info
            </h2>
            <p className="pt-2 text-sm opacity-70">
              Your profile reflect your professional and financial identity.
              Your info enhances your connections while keeping essentail
              details secure
            </p>
          </div>
          <div className="py-4 flex flex-col gap-y-2">
            <div
              className="text-[#6130F6] font-semibold text-lg cursor-pointer"
              onClick={handleSubmit}
            >
              Update account info
            </div>
            <div
              onClick={handleDeleteAccount}
              className="text-[#D80206] font-semibold text-lg cursor-pointer"
            >
              Delete account
            </div>
          </div>
        </div>
        <div className="flex-4 grid grid-cols-2 py-4 px-4 h-fit gap-y-4">
          <div className="flex flex-col h-auto">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="userName"
              value={updateUserData?.userName}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={updateUserData?.email}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col h-auto">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={updateUserData?.name}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={updateUserData?.phoneNumber}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={updateUserData?.dateOfBirth}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={updateUserData?.address}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Current Job</label>
            <input
              type="text"
              name="currentJob"
              value={updateUserData?.currentJob}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Place of Work</label>
            <input
              type="text"
              name="placeOfWork"
              value={updateUserData?.placeOfWork}
              onChange={handleChange}
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Account Status</label>
            <input
              type="text"
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Membership Plan</label>
            <input
              type="text"
              className=" border border-gray-400 p-2 rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
