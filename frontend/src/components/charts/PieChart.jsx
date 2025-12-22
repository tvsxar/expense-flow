import "../../utils/setupCharts";
import { Pie } from "react-chartjs-2";

function PieChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", labels: { color: "#000" } },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(55,65,81,0.9)",
      },
    },
  };

  return <Pie data={data} options={options}></Pie>;
}

export default PieChart;