import React from "react";
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
  return (
    <div className="flex p-4">
      <div className="flex-6 flex flex-col gap-y-4">
        <h2>Month account report</h2>
        <div className="flex justify-between">
          <div className="flex flex-col p-2 px-6 gap-y-1 rounded-lg shadow">
            <span>Monthly income</span>
            <span>12250</span>
            <span>+10%</span>
          </div>
          <div className="flex flex-col p-2 px-6 gap-y-1 rounded-lg shadow">
            <span>Monthly expense</span>
            <span>12250</span>
            <span>+10%</span>
          </div>
          <div className="flex flex-col p-2 px-6 gap-y-1 rounded-lg shadow">
            <span>Monthly saving</span>
            <span>12250</span>
            <span>+10%</span>
          </div>
        </div>

        <div className="shadow p-4 px-2">
          <div className="text-xl font-semibold">Cash flow report</div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
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
      <div className="flex-2">Right</div>
    </div>
  );
};

export default Dashboard;
