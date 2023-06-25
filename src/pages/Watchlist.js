import React from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashbord'

export default function Watchlist() {
    const coinsData = JSON.parse(localStorage.getItem('coin'));
  return (
    <div>
      <Header/>
      <TabsComponent/>
    </div>
  )
}
