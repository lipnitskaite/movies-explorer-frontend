import './Portfolio.css';

import React from 'react';

import linkArrow from '../../../images/portfolio_link-arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__links-item'>
          <a className='portfolio__link' href='https://github.com/lipnitskaite/how-to-learn' target='_blank' rel='noreferrer'>
            <p className='portfolio__link-title'>Статичный сайт</p>
            <img className='portfolio__link-arrow' src={linkArrow} alt='Декоративное изображение стрелки для перехода по ссылке в портфолио'></img>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a className='portfolio__link' href='https://github.com/lipnitskaite/russian-travel' target='_blank' rel='noreferrer'>
            <p className='portfolio__link-title'>Адаптивный сайт</p>
            <img className='portfolio__link-arrow' src={linkArrow} alt='Декоративное изображение стрелки для перехода по ссылке в портфолио'></img>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a className='portfolio__link' href='https://github.com/lipnitskaite/react-mesto-api-full' target='_blank' rel='noreferrer'>
            <p className='portfolio__link-title'>Одностраничное приложение</p>
            <img className='portfolio__link-arrow' src={linkArrow} alt='Декоративное изображение стрелки для перехода по ссылке в портфолио'></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;