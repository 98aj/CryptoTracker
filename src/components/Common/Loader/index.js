import React from 'react'
import { CircularProgress } from '@mui/material'
import './style.css'

export default function Loader() {
  return (
    <div className='loader'>
      <CircularProgress />
    </div>
  )
}
