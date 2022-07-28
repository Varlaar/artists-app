import React from "react";
import "./Card.css";

function Card({ card }) {
  const imageUrl = 'https://test-front.framework.team/'+card.imageUrl;
  return (
        <div className="card">
          <div className="card__img">
            <img width = {360} height = {275} src={imageUrl} alt='https://test-front.framework.team/' />
          </div>
          <div className="card__name">{card.name}</div>
        </div>
  );
}

export default Card;
