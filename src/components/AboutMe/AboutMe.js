import '../AboutMe/AboutMe.css';

import React from 'react';

import studentPicture from '../../images/student_pic.svg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <img className='about-me__picture' src={studentPicture} alt='Фотография разработчика приложения'></img>
        <h3 className='about-me__subtitle'>Виталий</h3>
        <p className='about-me__text about-me__text_type_bold'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <ul className='about-me__list'>
          <li className='about-me__list-item'><a className='about-me__link' href='https://www.facebook.com/' target='_blank' rel='noreferrer'>Facebook</a></li>
          <li className='about-me__list-item'><a className='about-me__link' href='https://github.com/lipnitskaite' target='_blank' rel='noreferrer'>Github</a></li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;