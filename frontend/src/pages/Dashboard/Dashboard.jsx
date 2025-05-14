import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Transactions from "../Transaction/Transaction";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Cards from "../../components/Cards";
import QuickTransaction from "../../components/QuickTransaction";

const data = [
  { name: "Jan", expense: 4000, profit: 2400 },
  { name: "Feb", expense: 3000, profit: 1398 },
  { name: "Mar", expense: 2000, profit: 9800 },
  { name: "Apr", expense: 2780, profit: 3908 },
  { name: "Apr", expense: 3780, profit: 3908 },
  { name: "Apr", expense: 1780, profit: 3908 },
  { name: "Apr", expense: 5780, profit: 3908 },
  { name: "Apr", expense: 2780, profit: 3908 },
];

const Dashboard = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const [month, setMonth] = useState(moment().format("MMM"));
  const [currentDate, setCurrentDate] = useState(moment());
  const [prevMonth, setPrevMonth] = useState(
    moment(currentDate).subtract(1, "month").format("MMM")
  );

  const calculatePercentage = (current, previous) => {
    if (previous === 0) {
      if (current === 0) return "0.00";
      return "100.00";
    }
    return (((current - previous) / previous) * 100).toFixed(2);
  };

  const monthlyData = {};

  user.transactions.forEach((tx) => {
    const month = moment(tx.date).format("MMM");

    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      monthlyData[month].income += tx.amount;
    } else {
      monthlyData[month].expense += tx.amount;
    }
  });

  moment.monthsShort().forEach((month) => {
    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expense: 0 };
    }
  });

  const currIncome = monthlyData[month].income;
  const currExprense = monthlyData[month].expense;
  const prevIncome = monthlyData[prevMonth].income;
  const prevExpense = monthlyData[prevMonth].expense;
  const currentSavings = monthlyData[month].income - monthlyData[month].expense;
  const prevSavings =
    monthlyData[prevMonth].income - monthlyData[prevMonth].expense;

  const incomePercentage = calculatePercentage(currIncome, prevIncome);
  const expensePercentage = calculatePercentage(currExprense, prevExpense);
  const savingsPercentage = calculatePercentage(currentSavings, prevSavings);

  const months = moment.monthsShort();

  const chartData = months.map((month) => ({
    name: month,
    expense: monthlyData[month]?.expense || 0,
  }));

  const handleMonthChange = (updatedMonth, currentDate) => {
    if (updatedMonth === "prev") {
      const newDate = moment(currentDate).subtract(1, "month");
      setCurrentDate(newDate);
      setMonth(newDate.format("MMM"));
      setPrevMonth(moment(newDate).subtract(1, "month").format("MMM"));
    } else {
      const newDate = moment(currentDate).add(1, "month");
      setCurrentDate(newDate);
      setMonth(newDate.format("MMM"));
      setPrevMonth(currentDate.format("MMM"));
    }
  };

  return (
    <div className="flex p-4 bg-[#e4e3e367] poppins-text">
      <div className="flex-5 flex flex-col gap-y-4">
        <div className="flex justify-between">
          <h2>Month account report</h2>
          <div className="flex bg-white gap-x-3 items-center justify-center shadow py-2 px-4 rounded-lg">
            <img
              src="/left.png"
              className="h-3 w-3 cursor-pointer"
              onClick={() => handleMonthChange("prev", currentDate)}
              alt=""
            />
            <span className="font-light text-sm">{month}</span>
            <img
              src="/right.png"
              className="h-3 w-3 cursor-pointer"
              onClick={() => handleMonthChange("next", currentDate)}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex flex-col bg-white p-2 pr-8 gap-y-1 rounded-lg shadow">
            <div className="bg-[#990EFC]/26 w-fit p-[6px] rounded-full">
              <img src="/Income.png" className="h-3 w-3" alt="" />
            </div>
            <span>Monthly income</span>
            <span className="text-lg font-semibold">
              {monthlyData[month]?.income}
            </span>
            <span>
              {incomePercentage}% compared to {prevMonth}
            </span>
          </div>
          <div className="flex flex-col bg-white p-2 pr-8 gap-y-1 rounded-lg shadow">
            <div className="bg-[#990EFC]/26 w-fit p-[6px] rounded-full">
              <img src="/expense.png" className="h-3 w-3" alt="" />
            </div>
            <span>Monthly expense</span>
            <span className="text-lg font-semibold">
              {monthlyData[month].expense}
            </span>
            <span>
              {expensePercentage}% compared to {prevMonth}
            </span>
          </div>
          <div className="flex flex-col bg-white p-2 pr-8 gap-y-1 rounded-lg shadow">
            <div className="bg-[#990EFC]/26 w-fit p-[6px] rounded-full">
              <img src="/savings.png" className="h-3 w-3" alt="" />
            </div>
            <span>Monthly saving</span>
            <span className="text-lg font-semibold">
              {monthlyData[month].income - monthlyData[month].expense}
            </span>
            <span>
              {savingsPercentage}% compared to {prevMonth}
            </span>
          </div>
        </div>

        <div className="shadow rounded-lg bg-white p-4 px-2">
          <div className="text-xl font-semibold">Cash flow report</div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="expense" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <Transactions />
        </div>
      </div>
      <div className="flex-2 flex flex-col ml-4 gap-y-6">
        <Cards />
        <QuickTransaction />
      </div>
    </div>
  );
};

export default Dashboard;
