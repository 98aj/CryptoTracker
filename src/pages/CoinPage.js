
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashbord/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { coinData } from "../functions/coinData";
import { coinPrices } from "../functions/coinPrices";
import CoinChart from "../components/Coin/CoinChart";

import { settingChartData } from "../functions/settingChartData";
import SelectDays from "../components/Coin/SelectDays";

export default function CoinPage() {
  const { id } = useParams();
  const [coins, setCoins] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await coinData(id);
    if (data) {
      coinObject(setCoins, data);

      const prices = await coinPrices(id, days);
      console.log(prices);

      settingChartData(setChartData, prices);

      setIsLoader(false);
    }
  }

  const handleChange = async (event) => {
    setIsLoader(true);
    setDays(event.target.value);
    const prices = await coinPrices(id, event.target.value);
    settingChartData(setChartData, prices);

    setIsLoader(false);
  };
  return (
    <div>
      <Header />
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <List coin={coins} />
          <div className="grey-wrapper">

          <SelectDays days={days} handleChange={handleChange} />
          <CoinChart chartData={chartData} />
          </div>
          <CoinInfo heading={coins.name} desc={coins.desc} />
        </>
      )}
    </div>
  );
}
