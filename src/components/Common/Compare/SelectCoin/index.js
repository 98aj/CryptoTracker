import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { get100Coin } from "../../../../functions/get100Coin";
import "./style.css";

export default function SelectCoin({crypto1, crypto2, handleCryptoChange}) {

  const [allCoins, setAllCoins] = useState([]);
  const style = {
    minWidth: 120,
    color: "var(--white)",
    border: "1px solid var(--blue)",
    margin: "1.5rem",
    textTransform: "capitalize",
  };

  useEffect(() => {
    getCoinData();
  }, []);

  async function getCoinData() {
    const coinData = await get100Coin();
    setAllCoins(coinData);
  }

  
  

  return (
    <div className="selectCoin">
      <p>CryptoCoin 1</p>
      <Select
        value={crypto1}
        label="Duration"
        onChange={(event) => handleCryptoChange(event, false)}
        sx={style}
      >
        {allCoins.filter((item)=> item.id!= crypto2).map((coin) => (
          <MenuItem value={coin.id}>{coin.id}</MenuItem>
        ))}
      </Select>
      <p>CryptoCoin 2</p>
      <Select
        value={crypto2}
        label="Duration"
        onChange={(event) => handleCryptoChange(event, true)}
        sx={style}
      >
        {allCoins.filter((item)=> item.id!=crypto1).map((coin) => (
          <MenuItem value={coin.id}>{coin.id}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
