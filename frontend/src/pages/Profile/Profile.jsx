import React from "react";

const Profile = () => {
  return (
    <div className="flex h-screen px-4">
      <div className="flex-2 flex flex-col justify-between">
        <div>
          <h3 className="py-4 text-lg font-medium opacity-70">Profile Info</h3>
          <p className="pt-2 text-sm opacity-70">
            Your profile reflect your professional and financial identity. Your
            info enhances your connections while keeping essentail details
            secure
          </p>
        </div>
        <div className="py-4 flex flex-col gap-y-2">
          <div className="text-[#6130F6] font-semibold text-lg">
            Update account info
          </div>
          <div className="text-[#D80206] font-semibold text-lg">
            Delete account
          </div>
        </div>
      </div>
      <div className="flex-4 grid grid-cols-2 py-4 px-4">
        <div className="flex flex-col">
          <label htmlFor="">Username</label>
          <input type="text" className="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone Number</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Date of Birth</label>
          <input type="date" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Address</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Current Job</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Place of Work</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Account Status</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Membership Plan</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
