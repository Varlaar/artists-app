import React from "react";
import { API_URL } from "../assets/constants";
import "./Card.css";
import empty_image from "../assets/img/empty_image.png";

export default React.memo(function Card({ card }) {
  const imageUrl = API_URL + card.imageUrl;
  const imageErrorSrc = empty_image;

  let sliced = card.name.slice(0, 37);
  if (sliced.length < card.name.length) {
    sliced += "...";
  }

  const [isHover, setIsHover] = React.useState(false);
  const cn = isHover ? "card card_hover" : "card";
  const handleHover = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div className="card">
      <img
        className="card__img"
        src={imageUrl}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = imageErrorSrc;
        }}
        alt={sliced}
      />
      <div className="card__name">{sliced}</div>
      <div className="card__img-bottom"></div>
      <div
        className={cn}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {isHover && <div className=""></div>}
      </div>
    </div>
  );
});
