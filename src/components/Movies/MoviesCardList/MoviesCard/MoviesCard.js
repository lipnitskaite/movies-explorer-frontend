import '../MoviesCard/MoviesCard.css';

import React from 'react';

import { transformMovieDuration } from '../../../../utils/utils';

function MoviesCard({ card, isSaved }) {
  const cardSaveButtonClassName = (
    `card__like-button ${isSaved ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'}`
  );

  const cardDeleteButtonClassName = (
    `card__like-button ${isSaved ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}`
  );

  return (
    <article className='movie-card movies__cards'>
      <a href={card.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movie-card__image' src={`https://api.nomoreparties.co/${card.image.url}`} alt={`Фрагмент из фильма ${card.nameRU}`}></img>
      </a>
      <div className='movie-card__container'>
        <h4 className='movie-card__title'>{card.nameRU}</h4>
        <input className={cardSaveButtonClassName} type='checkbox'></input>
        <button className={cardDeleteButtonClassName} type='button'></button>
      </div>
      <p className='movie-card__text'>{transformMovieDuration(card.duration)}</p>
    </article>
  );
}

export default MoviesCard;
