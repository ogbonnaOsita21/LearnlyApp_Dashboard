import ContentMain from "../../components/ContentMain/ContentMain";
import ContentTop from "../../components/ContentTop/ContentTop";
import { iconsImgs } from "../../utils/images";
import "./Content.css";

import React from "react";

const Content = () => {
  return (
    <div className="main-content">
      <div className="content-top-alert">
        <img src={iconsImgs.sunLight} alt="stock Image" />
        <span className="text-white text-sm">
          US Stock market opens in 3 hours
        </span>
      </div>
      <div className="content-container">
        <ContentTop />
        <ContentMain />
      </div>
    </div>
  );
};

export default Content;
