import "../../utils/setupCharts";
import { Doughnut } from "react-chartjs-2";

function DonutChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", labels: { color: "#000" } },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(55,65,81,0.9)",
      },
    },
    cutout: "65%"
  };

  return <Doughnut data={data} options={options}></Doughnut>;
}

export default DonutChart;
