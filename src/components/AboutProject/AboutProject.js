import '../AboutProject/AboutProject.css';

import React from 'react';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
      <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
      <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      <div className='about-project__table'>
        <h4 className='about-project__table-title about-project__table-title_type_main'>1 неделя</h4>
        <h4 className='about-project__table-title'>4 недели</h4>
        <p className='about-project__table-text'>Back-end</p>
        <p className='about-project__table-text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;