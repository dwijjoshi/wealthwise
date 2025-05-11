import React from "react";
import AccountCard from "./Accounts.jsx";
import AccountTabs from "../../layout/Tabs.jsx";

const LinkedAccounts = () => {
  return (
    <div className="p-6  bg-gray-50 min-h-screen  poppins-text">
      {/* Tabs */}
      <AccountTabs />

      {/* Header and Button */}

      <div className="heading-section flex justify-between items-center gap-10 mb-5 mt-6">
        <h2 className="text-xl font-semibold poppins-text ">Linked accounts</h2>
        <button className="w-50 h-10 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 add-payment-btn">
          Add New Account
        </button>
      </div>

      {/* Accounts List */}
      <div className="flex gap-8">
        <p className="text-gray-600 mt-1 text-sm max-w-md">
          Your linked accounts typically refers to bank accounts that are
          connected to the platform. These accounts are used for direct
          transfers, deposits, or withdrawals, often involving bork-to-bank
          transactions.
        </p>

        <div className="flex flex-col gap-4">
          <AccountCard status="active" isDefault={true} balance="₹ 320.000" />
          <AccountCard status="pending" isDefault={false} balance="₹ 687.000" />
          <AccountCard status="active" isDefault={false} balance="₹ 2250.000" />
        </div>
      </div>
    </div>
  );
};

export default LinkedAccounts;
