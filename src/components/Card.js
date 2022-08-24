import React from "react";
import requestLocations from "../api/locationsApi";
import requestAuthors from "../api/authorsApi";
import empty_image from "../assets/img/empty_image.png";
import { API_URL } from "../assets/constants";
import "./Card.scss";
import "./Card-media.scss";

export default React.memo(function Card({ card }) {
  const imageUrl = API_URL + card.imageUrl;
  const imageErrorSrc = empty_image;

  const [isHover, setIsHover] = React.useState(false);
  const [location, setLocation] = React.useState(null);
  const [author, setAuthor] = React.useState(null);

  const getAuthorById = React.useCallback(async () => {
    try {
      const { data } = await requestAuthors({ id: card.authorId });
      if (data.length > 0) {
        setAuthor(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [card.authorId]);

  const getLocationById = React.useCallback(async () => {
    try {
      const { data } = await requestLocations({ id: card.locationId });
      if (data.length > 0) {
        setLocation(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [card.locationId]);

  const handleHover = () => {
    setIsHover(true);
    getLocationById();
    getAuthorById();
  };

  const handleMouseLeave = () => setIsHover(false);

  return (
    <div
      className="card card_positioning"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="card__img"
        src={imageUrl}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = imageErrorSrc;
        }}
        alt={card.name}
      />
      <div className="card__img-bottom">
        <div className="card__name card__name_hover">{card.name}</div>
        {isHover && (
          <div className="card__item">
            <p className="card__subtitle card__subtitle_margin-bottom">
              Author:{" "}
              <span className="card__subtitle-description">{author?.name}</span>
            </p>
            <p className="card__subtitle card__subtitle_margin-bottom">
              Created:{" "}
              <span className="card__subtitle-description">{card.created}</span>
            </p>
            <p className="card__subtitle">
              Location:{" "}
              <span className="card__subtitle-description">
                {location?.location}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
