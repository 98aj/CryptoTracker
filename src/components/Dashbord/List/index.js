import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./style.css";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function List({ coin }) {
  return (
   
    <Link to={`/coinpage/${coin.id}`}>
    <motion.tr
      className="list-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tooltip title={coin.name}>
        <td className="flex-img">
          <img src={coin.image} className="coin-img" />
        </td>
      </Tooltip>
      <Tooltip title={coin.name}>
        <td>
          <div className="coin-info">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Price Change Percentage">
        {coin.price_change_percentage_24h_in_currency > 0 ? (
          <td className="chip-div">
            <div className="price-chip">
              {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-div">
            <div className="price-chip red">
              {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
            </div>
            <div className="icon-chip red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title="Current Price">
        <td className="info-container ">
          <h3
            className="coin-price text-center"
            style={{
              color:
                coin.price_change_percentage_24h_in_currency > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            $ {coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Market Volume">
        <td
          className="market-voulme"
          style={{ color: "var(--grey)", fontSize: "1rem" }}
        >
          <p className="text-right">{coin.market_cap.toLocaleString()}</p>
        </td>
      </Tooltip>
      <Tooltip title="Market Volume">
        <td
          className="market-voulme"
          style={{ color: "var(--grey)", fontSize: "1rem" }}
        >
          <p className="text-right">{coin.total_volume.toLocaleString()}</p>
        </td>
      </Tooltip>
    </motion.tr>
    </Link>
  );
}
