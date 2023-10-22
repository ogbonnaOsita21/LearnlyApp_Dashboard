import "./ContentMain.css";
import React from "react";
import PortfolioValue from "./PortfolioValue/PortfolioValue";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { lineChartData } from "../../data/data";
import IndustryCard from "./IndustryCard/IndustryCard";
import MarketData from "./MarketData/MarketData";
import AccountInfo from "./AccountInfo/AccountInfo";

const ContentMain = () => {
  return (
    <div>
      <div className="account-section">
        <div className="account-upgrade">
          <AccountInfo />
        </div>
        <div className="account-portfolio">
          <PortfolioValue />
        </div>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-section-header flex-container">
          <h3>Portfolio History</h3>
          <h4>
            <a href="#">Per Industry</a>
          </h4>
        </div>
        <div className="portfolio-section-body">
          <PortfolioCard data={lineChartData.october} />
          <PortfolioCard data={lineChartData.september} />
          <PortfolioCard data={lineChartData.august} />
          <IndustryCard />
        </div>
      </div>
      <MarketData />
    </div>
  );
};

export default ContentMain;
