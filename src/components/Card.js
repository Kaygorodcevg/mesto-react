import React from "react";

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__list-item">
      <img
        className="elements__image elements__image_template"
        src={card.link}
        onClick={handleCardClick}
      ></img>
      <div className="elements__discription">
        <h2 className="elements__text elements__text_template">{card.name}</h2>
        <div className="elements__reaction-wrapper">
          <button type="button" className="elements__reaction"></button>
          <span className="elements__counter">{card.likes.length}</span>
        </div>
      </div>
      <button type="button" className="elements__remove-button"></button>
    </li>
  );
}

export default Card;
