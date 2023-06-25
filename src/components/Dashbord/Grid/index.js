import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Grid({ coin }) {
  return (
    <Link to={`/coinpage/${coin.id}`}>
    <motion.div
      className={`coin-container ${
        coin.price_change_percentage_24h_in_currency < 0 && `coin-container-red`
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-info">
        <img src={coin.image} className="coin-img" />

        <div className="coin-info">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>

      {coin.price_change_percentage_24h_in_currency > 0 ? (
        <div className="chip-div">
          <div className="price-chip">
            {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip-div">
          <div className="price-chip red">
            {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
          </div>
          <div className="icon-chip red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}

      <div className="info-container">
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h_in_currency > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          $ {coin.current_price.toLocaleString()}
        </h3>
        <div
          className="market-voulme"
          style={{ color: "var(--grey)", fontSize: "1rem" }}
        >
          <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
          <p>Total Volume : {coin.total_volume.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
