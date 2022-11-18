import '../MoviesCard/MoviesCard.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { transformMovieDuration } from '../../../../utils/utils';

function MoviesCard({
  card,
  image,
  isSaved,
  onSaveCard,
  onDeleteCard
}) {
  const location = useLocation();

  const handleSaveCard = () => onSaveCard(card);
  const handleDeleteCard = () => onDeleteCard(card);

  return (
    <article className='movie-card movies__cards'>
      <a href={card.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movie-card__image' src={image} alt={`Фрагмент из фильма ${card.nameRU}`}></img>
      </a>
      <div className='movie-card__container'>
        <h4 className='movie-card__title'>{card.nameRU}</h4>
        {location.pathname === '/movies' && (
          <button 
          className={`movie-card__button movie-card__button_type_${isSaved ? 'saved' : 'save'}`}
          type='button'
          onClick={isSaved ? handleDeleteCard : handleSaveCard}
        ></button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
          className='movie-card__button movie-card__button_type_delete'
          type='button'
          onClick={handleDeleteCard}
        ></button>
        )}
      </div>
      <p className='movie-card__text'>{transformMovieDuration(card.duration)}</p>
    </article>
  );
}

export default MoviesCard;
