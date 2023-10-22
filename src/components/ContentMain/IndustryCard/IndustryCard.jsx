import { doughnutChartData } from "../../../data/data";
import { iconsImgs } from "../../../utils/images";
import DoughnutChart from "../../Charts/DoughnutChart";
import "./IndustryCard.css";
import React from "react";

const IndustryCard = () => {
  return (
    <div className="industry-card">
      <img src={iconsImgs.dashboardLight} alt="" />
      <div className="industry-chart">
        <DoughnutChart data={doughnutChartData} />
      </div>
    </div>
  );
};

export default IndustryCard;
