import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { lineChartData } from "../../data/data";
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const LineChart = ({ chartData }) => {
  const options = {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line data={chartData} options={options} />;
};

export default LineChart;
