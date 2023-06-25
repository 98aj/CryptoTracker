import React, { useState } from 'react'
import './style.css'

export default function CoinInfo({heading, desc}) {

    const shortDesc = desc.slice(0, 200) + '<p>Read More...</p>';
    const longDesc = desc;
    const [flag, setFlag] = useState(true);


  return (
    <div className='coinInfo' onClick={()=>{setFlag(!flag)}}>

        <h2>{heading}</h2>
        <p className='para' dangerouslySetInnerHTML={{__html : flag ? shortDesc : longDesc}}/>
        
      
    </div>
  )
}
