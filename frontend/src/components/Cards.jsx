import React from "react";

const Cards = () => {
  return (
    <div className="flex gap-y-4 flex-col bg-white py-4 rounded-lg px-4">
      <h2>Your Cards</h2>
      <div>
        <img src="/Cards.png" alt="" />
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <span>Balance</span>
          <span className="font-semibold">130000</span>
        </div>
        <div className="flex justify-between">
          <span>Currency</span>
          <span className="font-semibold">INR</span>
        </div>
        <div className="flex justify-between">
          <span>Account Status</span>
          <span className="font-semibold">Active</span>
        </div>
      </div>

      <div className="flex justify-center border-2 border-[#0068FF]/40 rounded-md text-[#0068FF] py-1">
        Add new card
      </div>
    </div>
  );
};

export default Cards;
