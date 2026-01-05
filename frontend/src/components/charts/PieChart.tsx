import "../../utils/setupCharts.js";
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface PieChartProps {
  data: ChartData<"pie", number[], string>;
}

function PieChart({ data }: PieChartProps) {
  const options: ChartOptions<"pie"> = {
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