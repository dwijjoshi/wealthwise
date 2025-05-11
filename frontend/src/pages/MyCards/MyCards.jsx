// CardManager.jsx
import { useEffect, useState } from "react";
import { Eye, Trash2, Settings, Star } from "lucide-react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./MyCards.css";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
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

const data = [
  { date: "01", moneyIn: 6000, moneyOut: 4000 },
  { date: "02", moneyIn: 3000, moneyOut: 7000 },
  { date: "03", moneyIn: 5000, moneyOut: 3000 },
  { date: "04", moneyIn: 2000, moneyOut: 6000 },
  { date: "05", moneyIn: 3000, moneyOut: 9000 },
  { date: "06", moneyIn: 1000, moneyOut: 4000 },
  { date: "07", moneyIn: 2500, moneyOut: 2000 },
  { date: "08", moneyIn: 9000, moneyOut: 3000 },
  { date: "09", moneyIn: 8000, moneyOut: 2000 },
  { date: "10", moneyIn: 6000, moneyOut: 3000 },
  { date: "11", moneyIn: 5000, moneyOut: 3000 },
  { date: "12", moneyIn: 7000, moneyOut: 3000 },
  { date: "13", moneyIn: 9000, moneyOut: 3000 },
  { date: "14", moneyIn: 7000, moneyOut: 3000 },
  { date: "15", moneyIn: 4000, moneyOut: 3000 },
  { date: "16", moneyIn: 1000, moneyOut: 3000 },
  { date: "17", moneyIn: 4000, moneyOut: 3000 },
  { date: "18", moneyIn: 4000, moneyOut: 3000 },
  { date: "19", moneyIn: 9000, moneyOut: 3000 },
  { date: "20", moneyIn: 2000, moneyOut: 3000 },
  { date: "21", moneyIn: 5000, moneyOut: 3000 },
  { date: "22", moneyIn: 2000, moneyOut: 3000 },
  { date: "23", moneyIn: 1000, moneyOut: 3000 },
  { date: "24", moneyIn: 8000, moneyOut: 3000 },
];

export default function MyCards() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCards();
  }, []);

  const getAllCards = async () => {
    try {
      const res = await axios.get(
        "https://wealthwise-sdlm.onrender.com/api/v1/all-cards",
        {
          withCredentials: true,
        }
      );
      console.log(res, "res check");

      if (res.data.success) {
        setCards(res.data.cards);
      }
    } catch (error) {}
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Toaster />
      <h2 className="text-2xl mb-4">Your cards</h2>

      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className={` text-white rounded-xl cursor-pointer ${
              card.active ? "" : "border-gray-300"
            }`}
          >
            <Cards
              cvc={card.cvv}
              expiry={card.expiry}
              focused=""
              name={card.name}
              number={card.number}
            />
          </div>
        ))}

        <div
          className=" border-2 border-dashed rounded-xl p-2 flex items-center justify-center text-blue-500 cursor-pointer"
          onClick={() => navigate("/dashboard/add-card")}
        >
          + Add New Card
        </div>
      </div>

      <div className="mt-6 flex divide-x py-2 px-4 justify-around border rounded-md">
        <Info
          label="Total balance"
          value={`₹ ${selectedCard?.balance?.toLocaleString() || "-"}`}
        />
        <Info label="Name on Card" value={selectedCard?.name || "-"} />
        <Info
          label="Card number"
          value={`${selectedCard?.number || "-"} `}
          icon={<Eye size={16} />}
        />
        <Info label="Expiry Date" value={selectedCard?.expiry || "-"} />
        <Info label="Card Category" value={selectedCard?.category || "-"} />
      </div>

      <div className="mt-6 flex divide-x py-2 px-4 justify-around border rounded-md">
        <Info label="Card Type" value="Credit" />
        <Info label="Card function" value={selectedCard?.function || "-"} />
        <Info label="Source bank" value="SBI" />
        <Info
          label="Status"
          value={<span className="text-green-600 font-semibold">● Active</span>}
        />
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium mb-1 block">
          Daily Usage Limit{" "}
          <span className="ml-2 text-purple-600">
            ({Math.round((1600 / 3200) * 100)}% used)
          </span>
        </label>
        <div className="w-full bg-gray-200 h-3 rounded">
          <div
            className="bg-purple-500 h-3 rounded"
            style={{
              width: `${(1600 / 3200) * 100}%`,
            }}
          />
        </div>
        <div className="text-sm mt-1 text-gray-600">
          ₹ {1600} / ₹ {3200}
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-xl mt-2">Card activity History</h2>
        <CardActivityChart />
      </div>
    </div>
  );
}

function Info({ label, value, icon }) {
  return (
    <div className="p-3 pr-6 bg-white">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="flex items-center gap-2 font-semibold text-gray-800 mt-1">
        {value}
        {icon}
      </div>
    </div>
  );
}

const CardActivityChart = () => {
  return (
    <div className="p-4 px-8 bg-white rounded-xl ">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="moneyIn" stackId="a" fill="green" name="Money in" />
          <Bar dataKey="moneyOut" stackId="a" fill="red" name="Money out" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
