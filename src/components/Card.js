import React from "react";
import { API_URL } from "../assets/constants";
import "./Card.css";
import empty_image from "../assets/img/empty_image.png";
import requestLocations from "../api/locationsApi";
import requestAuthors from "../api/authorsApi";
import normalizeName from "../api/utils/normalizeName";

export default React.memo(function Card({ card }) {
  const imageUrl = API_URL + card.imageUrl;
  const imageErrorSrc = empty_image;
  const normalizeCardName = normalizeName(card, 37);

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
      className="card"
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
        alt={normalizeCardName}
      />
      <div className="card__img-bottom">
        <div className="card__name">{normalizeCardName}</div>
        {isHover && (
          <div className="card__name-hover">
            <p className="card__name-hover--author">
              Author:{" "}
              <span className="card__name-hover--authorName">
                {author?.name}
              </span>
            </p>
            <p className="card__name-hover--created">
              Created:{" "}
              <span className="card__name-hover--createdDate">
                {card.created}
              </span>
            </p>
            <p className="card__name-hover--location">
              Location:{" "}
              <span className="card__name-hover--locationName">
                {location?.location}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
