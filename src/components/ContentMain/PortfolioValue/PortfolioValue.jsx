import "./PortfolioValue.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData } from "../../../data/data";
import { iconsImgs } from "../../../utils/images";
import { useEffect, useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
      text: "Portfolio Value",
    },

    legend: {
      display: false,
      position: "right",
    },

    htmlLegend: {
      containerID: "legend-container",
    },
  },

  responsive: true,
  categoryPercentage: 1.0,
  barPercentage: 0.15,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        callback: function (value) {
          const valueLegend = this.getLabelForValue(value);
          if (valueLegend.length > 4) {
            return valueLegend.substr(0, 4);
          } else {
            return valueLegend;
          }
        },
      },
    },
    y: {
      stacked: true,
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.style.display = "flex";
    listContainer.style.gap = "0.7rem";
    listContainer.style.flexDirection = "column";
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.style.alignItems = "center";
      li.style.cursor = "pointer";
      li.style.display = "flex";
      li.style.flexDirection = "row";
      // li.style.marginLeft = "5px";

      li.onclick = () => {
        chart.setDatasetVisibility(
          item.datasetIndex,
          !chart.isDatasetVisible(item.datasetIndex)
        );
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement("span");
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + "px";
      boxSpan.style.display = "inline-block";
      boxSpan.style.flexShrink = 0;
      boxSpan.style.height = "10px";
      boxSpan.style.marginRight = "5px";
      boxSpan.style.width = "10px";

      // Text
      const textContainer = document.createElement("p");
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.fontSize = "0.7rem";
      textContainer.style.padding = 0;
      textContainer.style.textDecoration = item.hidden ? "line-through" : "";

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  },
};

const PortfolioValue = () => {
  const ctrls = [
    { label: "1d", data: barChartData.chartData.daily },
    { label: "1w", data: barChartData.chartData.weekly },
    { label: "1m", data: barChartData.chartData.monthly },
    { label: "1y", data: barChartData.chartData.yearly },
    { label: "All", data: barChartData.chartData.yearly },
  ];
  let data = barChartData.chartData.daily;
  const [chartData, setChartData] = useState(data);
  const [activeCtrl, setActiveCtrl] = useState(null);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  return (
    <div className="portfolio">
      <div className="portfolio-header flex-container">
        <div className="">
          <ul className="portfolio-chart-ctrls">
            {ctrls.map((ctrl, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setChartData(ctrl.data);
                    setActiveCtrl(i);
                  }}
                  className={activeCtrl === i ? "active" : ""}
                >
                  {ctrl.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="portfolio-icon">
          <img src={iconsImgs.dollarCircle} alt="" />
        </div>
      </div>
      <div className="portfolio-data">
        <div className="portfolio-data-chart">
          <Bar
            data={chartData}
            options={options}
            plugins={[htmlLegendPlugin]}
          />
        </div>
        <div className="portfolio-data-container">
          <div className="portfolio-data-values">
            <h4>Portfolio Value</h4>
            <h2 className="portfolio-data-amount">
              ${barChartData.performanceData.amount}
            </h2>
            {barChartData.performanceData.gain < 0 ? (
              <div className="portfolio-data-performance">
                <img src={iconsImgs.lossArrow} alt="" />
                <span className="text-red">
                  {barChartData.performanceData.gain} (
                  {barChartData.performanceData.percentage}
                  %)
                </span>
              </div>
            ) : (
              <div className="portfolio-data-performance">
                <img src={iconsImgs.gainArrow} alt="" />
                <span className="text-green">234.23 (30.34%)</span>
              </div>
            )}
          </div>
          <div id="legend-container"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioValue;
