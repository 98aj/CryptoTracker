import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashbord";
import axios from "axios";
import Search from "../components/Dashbord/Search";
import PaginationControlled from "../components/Dashbord/Pageinition";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coin } from "../functions/get100Coin";

export default function DashbordPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(true);
  const handlePaChange = (event, value) => {
    setPage(value);
    let previousindex = (value - 1) * 10;
    setPagination(coins.slice(previousindex, previousindex + 10));
  };

  const changeFun = (e) => {
    setSearch(e.target.value);
  };

  const filterCoin = coins.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await get100Coin();
    if(data){

      setCoins(data);
      setPagination(data.slice(0, 10));
      setIsLoader(false);
    }
  }
  return (
    <div>
      <Header />
      <BackToTop />
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <Search search={search} changeFun={changeFun} />
          <TabsComponent coins={search ? filterCoin : pagination} />
          {!search && (
            <PaginationControlled page={page} handlePaChange={handlePaChange} />
          )}
        </>
      )}
    </div>
  );
}
