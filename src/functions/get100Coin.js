import axios from "axios";

export const get100Coin = () => {
  const myCoin = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en"
    )
    .then((resp) => {
      return resp.data;
    })
    .catch(() => {
      console.log("Unexpected error occured");
    });

  return myCoin;
};
