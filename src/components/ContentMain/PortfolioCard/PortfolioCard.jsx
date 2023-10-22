import { lineChartData } from "../../../data/data";
import { iconsImgs } from "../../../utils/images";
import LineChart from "../../Charts/LineChart";
import "./PortfolioCard.css";

const PortfolioCard = ({ data }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-header">
        <h3 className="portfolio-card-header-text">NOV 19</h3>
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-chart">
          <LineChart chartData={data.chartData} />
        </div>
        <div className="portfolio-card-values">
          <h4>Portfolio Value</h4>
          <h2 className="portfolio-amount">${data.performanceData.amount}</h2>
          {data.performanceData.gain < 0 ? (
            <div className="portfolio-performance">
              <img src={iconsImgs.lossArrow} alt="" />
              <span className="text-red">{data.performanceData.gain} ({data.performanceData.percentage}%)</span>
            </div>
          ) : (
            <div className="portfolio-performance">
              <img src={iconsImgs.gainArrow} alt="" />
              <span className="text-green">234.23 (30.34%)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
