import React from "react";
import { useSelector } from 'react-redux'

function OneCard (props) {
  const card = props.card

  return (
    <div className="one__card">

      <div className="one__card_header">
        <h3>{card.name}</h3>
        <p>{card.class}</p>
        <p>{card.element}</p>
      </div>

      <img src={card.image} />

      <div className="one__card_info">
        <h5>{card.race}</h5>
        <p>{card.ability_one_id}</p>
        <p>{card.ability_two_id}</p>
        <p>{card.ability_three_id}</p>
        <p>{card.ability_four_id}</p>
        <p>{card.ability_supreme_id}</p>
        <p>{card.ability_passive_id}</p>

      </div>

      <div className="one__card_desc">
        <p>{card.description}</p>
      </div>

      <div className="one__card_footer">
        <p>{card.age}</p>
      </div>

    </div>
  )
}

export default OneCard