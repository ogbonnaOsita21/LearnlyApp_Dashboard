import { marketData } from "../../../data/data";
import { iconsImgs } from "../../../utils/images";
import "./MarketData.css";
import React from "react";

const data = marketData[0];

const MarketData = () => {
  return (
    <table class="market-data-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>price</th>
          <th>% return</th>
          <th>total net cost</th>
          <th>market value</th>
          <th>total gain</th>
          <th>daily gain</th>
          <th>portfolio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td aria-label="Symbol">
            <div className="row-header flex-container-start">
              <img src={data.symbol.logo} alt="" />
              <span> {data.symbol.title}</span>
            </div>
          </td>
          <td aria-label="Price">= $ {data.price}</td>
          <td
            aria-label="% Return"
            style={{ color: data.return > 0 ? "#00aaa7" : "#fb5253" }}
          >
            $ {data.return}
          </td>
          <td aria-label="Total Net Cost">$ {data.totalNetCost}</td>
          <td aria-label="Market Value">$ {data.marketValue}</td>
          <td
            aria-label="Total Gain"
            style={{ color: data.totalGain > 0 ? "#00aaa7" : "#fb5253" }}
          >
            $ {data.totalGain}
          </td>
          <td
            aria-label="Daily Gain"
            style={{ color: data.dailyGain > 0 ? "#00aaa7" : "#fb5253" }}
          >
            $ {data.dailyGain}
          </td>
          <td aria-label="Portfolio">{data.portfolio}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MarketData;
