import React from "react";
import { API_URL } from "../assets/constants";
import "./Card.css";

function Card({ card }) {
  const imageUrl = API_URL + card.imageUrl;
  return (
        <div className="card">
          <div className="card__img">
            <img src={imageUrl} alt={card.name}/>
          </div>
          <div className="card__name">{card.name}</div>
        </div>
  );
}

export default Card;
