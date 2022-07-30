import React from "react";
import { useSelector } from 'react-redux'

function OneCard (props) {
  const card = props.card

  return (
    <div className="one__card">

      <div className="one__card_header">
        <h3>{card.name}</h3>
        <span>{card.element}</span>
      </div>

      <img src={card.image} />

      <div className="one__card_info">
        <p>{card.age}</p>
        <p>{card.race}</p>
        <p>{card.class}</p>
      </div>

      <div className="one__card_desc">
        <p>{card.description}</p>
      </div>

      <div className="one__card_abilities">
        <span>{card.ability_one_id}</span>
        <span>{card.ability_two_id}</span>
        <span>{card.ability_three_id}</span>
        <span>{card.ability_four_id}</span>
        <span>{card.ability_supreme_id}</span>
        <span>{card.ability_passive_id}</span>
      </div>

    </div>
  )
}

export default OneCard