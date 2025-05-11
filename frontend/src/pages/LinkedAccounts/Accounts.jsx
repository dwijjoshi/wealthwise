import React from "react";

const statusStyles = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
};

const AccountCard = ({
  accountNumber = "•••• •••• •••• 2TYO",
  bank = "Banque Misr",
  name = "Shubham Jain",
  balance = "₹ 0.000",
  status = "active",
  isDefault = false,
}) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-3 shadow-sm">
      <div className="grid grid-cols-5 gap-4 text-sm text-gray-600">
        <div>
          <p className="font-medium">Account Number</p>
          <p>{accountNumber} ⓘ</p>
        </div>
        <div>
          <p className="font-medium">Source Bank</p>
          <p>{bank}</p>
        </div>
        <div>
          <p className="font-medium">Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p className="font-medium">Total balance</p>
          <p className="font-semibold">{balance}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-2">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
        >
          {status === "active" ? "Active account" : "Pending account"}
        </span>
        {isDefault ? (
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            ✓ Default account
          </span>
        ) : (
          <button className="px-3 py-1 rounded-full border border-purple-600 text-purple-600 text-sm hover:bg-purple-50">
            ✓ Set as Default
          </button>
        )}
        <div className="ml-auto flex gap-4">
          <button className="text-blue-600 hover:underline">Edit</button>
          <button className="text-red-600 hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
