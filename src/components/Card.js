import emptyImage from "../assets/img/emptyImage.png";
import "./Card.css";

export const pictureCard = [
  {
    previewImage: emptyImage,
    title: "The Persistence Of Memory",
  },

  {
    previewImage: emptyImage,
    title: "The Starry Night",
  },

  {
    previewImage: emptyImage,
    title: "The Flying Carpet",
  },

  {
    previewImage: emptyImage,
    title: "The Persistence Of Memory",
  },

  {
    previewImage: emptyImage,
    title: "The Starry Night",
  },

  {
    previewImage: emptyImage,
    title: "The Flying Carpet",
  },

  {
    previewImage: emptyImage,
    title: "The Persistence Of Memory",
  },

  {
    previewImage: emptyImage,
    title: "The Starry Night",
  },
];

function Card({ card }) {
  return (
        <div className="card">
          <div className="card__img">
            <img src={card.previewImage} alt="item.previewImage" />
          </div>
          <div className="card__title">{card.title}</div>
        </div>
  );
}

export default Card;
