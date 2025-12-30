import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import DonutChart from "./charts/DonutChart";
import PieChart from "./charts/PieChart";
import { useState } from "react";

function ExpensesCharts({ chartData = [] }) {
  const [selectedChart, setSelectedChart] = useState("line");
  const [selectedRound, setSelectedRound] = useState("doughnut");
  const totalChartData = {
    labels: chartData.totalChart.map(day => day.label),
    datasets: [
      {
        label: "Expenses",
        data: chartData.totalChart.map(day => day.total),
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

  const categoryChartData = {
    labels: chartData.categoryChart.map(category => category.category),
    datasets: [
      {
        data: chartData.categoryChart.map(category => category.total),
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
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 lg:items-start sm:px-12 lg:px-25">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-3xl p-4">
        <div className="flex gap-2 mb-4 flex-wrap">
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
        <div className="w-full">
          {selectedChart === "line" ? (
            <LineChart data={totalChartData} />
          ) : (
            <BarChart data={totalChartData} />
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-md lg:max-w-3xs lg:w-2/5 p-6">
        <div className="flex gap-2 mb-12 flex-wrap">
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
          <DonutChart data={categoryChartData} />
        ) : (
          <PieChart data={categoryChartData} />
        )}
      </div>
    </div>
  );
}

export default ExpensesCharts;
