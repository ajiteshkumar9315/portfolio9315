import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail,years}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{years}</span>
      {/* <button className="c-button">2016-17</button> */}
    </div>
  )
}

export default Card
