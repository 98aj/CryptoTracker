import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices)=>{
    setChartData({
        labels: prices.map((price)=> convertDate(price[0])),
        datasets: [
          {
            data: prices.map((price)=> price[1]),
            borderColor: "#3a80e9",
            backgroundColor: '#3a80e945',
            borderWidth : 2,
            tension: 0.25,
            pointRadius: 0,
            fill: true,
          },
        ],
      });
} 