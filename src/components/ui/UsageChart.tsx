import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Electricity Usage (kWh)",
      data: [12, 15, 9, 18, 14],
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: 6,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
const UsageChart = () => {
  return (
    <div className="h-[300px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default UsageChart;
