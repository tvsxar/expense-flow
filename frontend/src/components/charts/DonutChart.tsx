import "../../utils/setupCharts.js";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface DonutChartProps {
  data: ChartData<"doughnut", number[], string>;
}

function DonutChart({ data }: DonutChartProps) {
  const options: ChartOptions<"doughnut"> = {
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
