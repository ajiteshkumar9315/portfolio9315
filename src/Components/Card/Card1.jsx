import React from 'react'
import './Card.css'

const Card1 = ({emoji,heading,detail}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Reade more</button>
    </div>
  )
}

export default Card1