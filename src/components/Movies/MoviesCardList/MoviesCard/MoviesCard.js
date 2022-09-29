import '../MoviesCard/MoviesCard.css';

import React from 'react';

import movieImage from '../../../../images/pic__COLOR_pic.svg';

function MoviesCard(props) {
  return (
    <>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
      <article className='movie-card movies__cards'>
        <img className='movie-card__image' src={movieImage} alt='Фрагмент из фильма "33 слова о дизайне"'></img>
        <div className='movie-card__container'>
          <h4 className='movie-card__title'>33 слова о дизайне</h4>
          <input className={props.isSavedCard ? 'movie-card__toggle movie-card__toggle_disabled' : 'movie-card__toggle'} type='checkbox'></input>
          <button className={props.isSavedCard ? 'movie-card__button' : 'movie-card__button movie-card__button_disabled'}></button>
        </div>
        <p className='movie-card__text'>1ч42м</p>
      </article>
    </>
  );
}

export default MoviesCard;
