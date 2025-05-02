import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const QuickTransaction = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const transactions = user?.transactions.slice(0, 4);
  return (
    <div className="flex flex-col gap-y-4 bg-white shadow rounded-lg px-4 py-6">
      <h2>Quick Transaction</h2>
      <div className="flex justify-between text-sm">
        <div className="flex flex-col justify-center text-center">
          <div
            className="p-2 bg-[#6130F6] rounded-full text-center cursor-pointer"
            onClick={() => navigate("/dashboard/add-transaction")}
          >
            <img src="/+.png" className="p-1" alt="" />{" "}
          </div>
          <span>Add</span>
        </div>
        {transactions?.map((transaction) => (
          <div className="flex flex-col justify-center text-center">
            <div className="p-2 bg-[#6130F6] rounded-full text-center">
              <span className="p-1 text-white">
                {transaction.username.charAt(0)}
              </span>
            </div>
            <span>{transaction.username.slice(0, 4)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickTransaction;
