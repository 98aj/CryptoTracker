import axios from "axios";

export const coinPrices = (id, days) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((resp) => {
      return resp.data.prices;
    })
    .catch((error) => {
      console.log(error);
    });

    return prices;
};
