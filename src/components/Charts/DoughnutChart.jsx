import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({data}) => {

  const options = {
    cutout: "90%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      const noOfIndustries =
        chart.getDatasetMeta(0).data.length < 10
          ? "0" + chart.getDatasetMeta(0).data.length
          : chart.getDatasetMeta(0).data.length;
      ctx.save();
      ctx.font = "bold 30px sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText(
        noOfIndustries,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y - 10
      );

      ctx.font = "15px sans-serif";
      ctx.fillText(
        "INDUSTRY",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 10
      );
    },
  };
  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default DoughnutChart;
