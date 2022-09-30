import'../Promo/Promo.css';

import React from 'react';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className='promo__image'></div>
      </div>
    </section>
  );
}

export default Promo;