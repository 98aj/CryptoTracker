import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2)=>{
  if(prices2){
    setChartData({
      labels: prices1.map((price)=> convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price)=> price[1]),
          borderColor: "#3a80e9",
          
          borderWidth : 2,
          tension: 0.25,
          pointRadius: 0,
          yAxisId: "crypto1",
     
        },
        {
          data: prices2.map((price)=> price[1]),
          borderColor: "#3a80e9",          
          borderWidth : 2,
          tension: 0.25,
          pointRadius: 0,
          yAxisId: "crypto2",
        }
      ],
    });

  }else{
    setChartData({
      labels: prices1.map((price)=> convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price)=> price[1]),
          borderColor: "#3a80e9",
          backgroundColor: '#3a80e945',
          borderWidth : 2,
          tension: 0.25,
          pointRadius: 0,
          fill: true,
          yAxisId: "crypto1",
        },
      ],
    });

  }
    
} 