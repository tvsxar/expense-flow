import "../../utils/setupCharts.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface LineChartProps {
  data: ChartData<"line", number[], string>;
}

function LineChart({ data }: LineChartProps) {
  const options: ChartOptions<'line'> = {
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

  return <Line data={data} options={options} />;
}

export default LineChart;
