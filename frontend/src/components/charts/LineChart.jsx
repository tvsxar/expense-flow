import "../../utils/setupCharts";
import { Line } from "react-chartjs-2";

function LineChart({ data }) {
  const options = {
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
