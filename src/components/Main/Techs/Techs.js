import '../Techs/Techs.css';

import React from 'react';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__table'>
          <p className='techs__table-item'>HTML</p>
          <p className='techs__table-item'>CSS</p>
          <p className='techs__table-item'>JS</p>
          <p className='techs__table-item'>React</p>
          <p className='techs__table-item'>Git</p>
          <p className='techs__table-item'>Express.js</p>
          <p className='techs__table-item'>mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;