import'../Footer/Footer.css';

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <nav>
          <ul className='footer__nav'>
            <li className='footer__nav_item'><a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
            <li className='footer__nav_item'><a className='footer__link' href='https://github.com/lipnitskaite' target='_blank' rel="noreferrer">Github</a></li>
            <li className='footer__nav_item'><a className='footer__link' href='https://www.facebook.com/yandex.practicum/' target='_blank' rel='noreferrer'>Facebook</a></li>
          </ul> 
        </nav>
        <p className='footer__text footer__text_type_copyright'>© 2022</p>
      </div>
    </footer>
  );
}

export default Footer;