import React from 'react'
import './style.css'

function Button({text, onClick, outline}) {
  return (
    <button className={outline? 'outlineBtn' : 'btn'}>{text}</button>
  )
}

export default Button
