import React from "react";
import { useSelector } from 'react-redux'

function OneCard (props) {
  const card = props.card

  return (
    <div className='card__container'>
          <h3>{card.name}</h3>
          <img src={card.image} />
          <p>{card.description}</p>
        </div>
  )
}

export default OneCard