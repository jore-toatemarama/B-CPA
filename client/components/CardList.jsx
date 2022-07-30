import React from "react";
import { useSelector } from 'react-redux'
import OneCard from "./OneCard";

function CardList () {
  const cards = useSelector((globalState) => globalState.cards)
  console.log(cards)

  return (
    <>
      <h2>Card Library</h2>
      <div className="card__container">
      {cards.map(card => <OneCard card={card} key={card.id}/>)}
      </div>

    </>
)}

export default CardList