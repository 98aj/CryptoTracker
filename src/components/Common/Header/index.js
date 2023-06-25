import React from 'react'
import './style.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='navbar'>
      <h2 className='logo'><Link to='/'>CryptoTracker<span style={{color : 'var(--blue'}}>.</span></Link></h2>
      <div className='links'>
        <Link to='/' className='link'><p>Home</p></Link>
        <Link to='/watchist' className='link'><p>Watchlist</p></Link>
        <Link to='/compare' className='link'><p>Compare</p></Link>
        <Link to='/dashbord' className='link'><Button text={'dashbord'}/></Link>
      </div>
      <div className='drawer'>
        <TemporaryDrawer/>
     

      </div>
    </div>
  )
}
