import axios from "axios";

export const coinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((resp) => {
      return resp.data;
    })
    .catch(() => {
      console.log("Unexpected error occured");      
    });

  return myData;
};
