import emptyImage from '../assets/img/emptyImage.png';
import './Card.css';

const pictureCard = [
    {
        previewImage : emptyImage,
        description : 'The Persistence Of Memory'
    },

    {
        previewImage : emptyImage,
        description : 'The Starry Night'
    },

    {
        previewImage : emptyImage,
        description : 'The Flying Carpet'
    },

    {
        previewImage : emptyImage,
        description : 'The Persistence Of Memory'
    },

    {
        previewImage : emptyImage,
        description : 'The Starry Night'
    },

    {
        previewImage : emptyImage,
        description : 'The Flying Carpet'
    },

    {
        previewImage : emptyImage,
        description : 'The Persistence Of Memory'
    },

    {
        previewImage : emptyImage,
        description : 'The Starry Night'
    }
]

function Card({card}) {
    return (
        <div className='row'>
            {pictureCard.map(item => <div className='card' key={item.previewImage}>
                <div className='card__img'>
                    <img src={item.previewImage} alt="item.previewImage" />
                    </div>
                        <div className='card__title'>
                            <span>{item.description}</span>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Card;