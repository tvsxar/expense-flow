import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import DonutChart from "./charts/DonutChart";
import PieChart from "./charts/PieChart";
import { useState } from "react";

function ExpensesCharts() {
  const [selectedChart, setSelectedChart] = useState("line");
  const [selectedRound, setSelectedRound] = useState("doughnut");
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Expenses",
        data: [50, 30, 40, 20, 60, 5, 45],
        borderColor: "rgba(233,214,236,1)",
        backgroundColor: `rgba(233,214,236,${
          selectedChart === "line" ? 0.2 : 0.5
        })`,
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const donutData = {
    labels: ["Food", "Transport", "Entertainment", "Bills", "Other"],
    datasets: [
      {
        data: [100, 50, 75, 40, 25],
        backgroundColor: [
          "rgba(233,214,236,0.7)",
          "rgba(202,200,240,0.7)",
          "rgba(129,150,143,0.7)",
          "rgba(150,189,198,0.7)",
          "rgba(207,185,165,0.7)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-2">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg max-w-3xl mx-auto p-6 mt-6 flex-1">
        <div className="flex gap-2 mb-4">
          {["line", "bar"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedChart(type)}
              className={`px-4 py-1 rounded-xl text-black cursor-pointer ${
                selectedChart === type ? "bg-pink-100" : "bg-gray-200"
              }`}
            >
              {type === "line" ? "Line" : "Bar"}
            </button>
          ))}
        </div>
        {selectedChart === "line" ? (
          <LineChart data={data} />
        ) : (
          <BarChart data={data} />
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-lg max-w-xs mx-auto p-6 mt-6">
        <div className="flex gap-2 mb-12">
          {["doughnut", "pie"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedRound(type)}
              className={`px-4 py-1 rounded-xl text-black cursor-pointer ${
                selectedRound === type ? "bg-pink-100" : "bg-gray-200"
              }`}
            >
              {type === "doughnut" ? "Doughnut" : "Pie"}
            </button>
          ))}
        </div>
        {selectedRound === "doughnut" ? (
          <DonutChart data={donutData} />
        ) : (
          <PieChart data={donutData} />
        )}
      </div>
    </div>
  );
}

export default ExpensesCharts;
