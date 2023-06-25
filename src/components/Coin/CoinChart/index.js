import React from 'react'
import { Line } from 'react-chartjs-2'
import './style.css'
import Chart from 'chart.js/auto';
import SelectDays from '../SelectDays';
import {convertDate} from '../../../functions/convertDate'

export default function CoinChart({chartData, priceType, multiAxis}) {
    const options = {
        plugins : {
            legend:{
                display: multiAxis ? true : false
            }
        },

        responsive : true,

        interaction: {
            mode: 'index',
            intersect:false,
        },
        scales: {
          crypto1:{
            type:'linear',
            display: true,
            position:'left',
          },
          
          crypto2:{
            type:'linear',
            display: true,
            position:'right',
          },
          
        },
    } 
  return (
    <div className='chartDisplay'>
       
      <Line data={chartData} options={options}/>
    </div>
  )
}
