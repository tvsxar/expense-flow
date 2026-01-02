import "../../utils/setupCharts.js";
import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface BarChartProps {
  data: ChartData<"bar", number[], string>;
}

function BarChart({ data } : BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#000" } },
      tooltip: { enabled: true, backgroundColor: "rgba(55,65,81,0.9)" },
    },
    scales: {
      x: { ticks: { color: "#000" }, grid: { color: "rgba(0,0,0,0.1)" } },
      y: { ticks: { color: "#000" }, grid: { color: "rgba(0,0,0,0.1)" } },
    },
  };
  return <Bar data={data} options={options} />;
}

export default BarChart;
