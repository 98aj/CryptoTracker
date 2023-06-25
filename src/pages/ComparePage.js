import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Common/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";
import { coinData } from "../functions/coinData";
import { coinObject } from "../functions/coinObject";
import { coinPrices } from "../functions/coinPrices";
import { settingChartData } from "../functions/settingChartData";
import Loader from "../components/Common/Loader";
import List from "../components/Dashbord/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import CoinChart from "../components/Coin/CoinChart";

export default function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("tether");
  const [cryptoData1, setCryptoData1] = useState({});
  const [cryptoData2, setCryptoData2] = useState({});
  const [days, setDays] = useState(7);
  const [isLoader, setIsLoader] = useState(true);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    getData()
  }, []);

  const handleChange = async (event) => {
    setDays(event.target.value);
    const prices1 = await coinPrices(crypto1, days);
      const prices2 = await coinPrices(crypto2, days);
      settingChartData(setChartData, prices1, prices2)
  };

  async function getData() {
    setIsLoader(true)
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
      settingChartData(setChartData, prices1, prices2)
     setIsLoader(false)
    }
  }

  const handleCryptoChange = async (event, isCoin2) => {
    setIsLoader(true)
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await coinData(event.target.value);
      if (data) {
        coinObject(setCryptoData2, data);         
       
      }
    } else {
      setCrypto1(event.target.value);
      const data = await coinData(event.target.value);
      if (data) {
        coinObject(setCryptoData1, data);
       
      }
    }
    const prices1 = await coinPrices(crypto1, days);
    const prices2 = await coinPrices(crypto2, days);
  
    setIsLoader(false)
    
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
      <List coin={cryptoData1} />
      <List coin={cryptoData2} />
      <CoinChart chartData={chartData} priceType={'prices'} multiAxis={true}/>
      <CoinInfo heading={cryptoData1.name} desc={cryptoData1.desc} />
      <CoinInfo heading={cryptoData2.name} desc={cryptoData2.desc} />
      </>)}
    </div>
    
  );
}
