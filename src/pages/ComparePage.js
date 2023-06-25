import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Common/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";
import { coinData } from "../functions/coinData";
import { coinObject } from "../functions/coinObject";
import { coinPrices } from "../functions/coinPrices";
import { settingChartData } from "../functions/settingChartData";
import Loader from "../components/Common/Loader";

export default function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("bitcoin");
  const [cryptoData1, setCryptoData1] = useState({});
  const [cryptoData2, setCryptoData2] = useState({});
  const [days, setDays] = useState(7);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
  
  }, []);

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  async function getData() {
    const data1 = await coinData(crypto1);
    const data2 = await coinData(crypto2);
    if (data1) {
      coinObject(setCryptoData1, data1);
    }
    if (data2) {
      coinObject(setCryptoData2, data2);
    }

    if (data1 && data2) {
      const prices1 = await coinPrices(crypto1, days);
      const prices2 = await coinPrices(crypto2, days);
      console.log(prices1, prices2);
    }
  }

  const handleCryptoChange = async (event, isCoin2) => {
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await coinData(event.target.value);
      if (data) {
        coinObject(setCryptoData2, data);
        setIsLoader(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await coinData(event.target.value);
      if (data) {
        coinObject(setCryptoData1, data);
        setIsLoader(false);
      }
    }
    const prices1 = await coinPrices(crypto1, days);
    const prices2 = await coinPrices(crypto2, days);
    console.log(prices1, prices2);
  };

  return (
    <div>
      <Header />
      {isLoader ? (
        <Loader />
      ) : (
        <>
      <div className="coinPage">
        <SelectCoin
          crypto1={crypto1}
          crypto2={crypto2}
          handleCryptoChange={handleCryptoChange}
        />
        <SelectDays days={days} handleChange={handleChange} />
      </div>
      </>)}
    </div>
    
  );
}