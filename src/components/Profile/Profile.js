import '../Profile/Profile.css';

import React from 'react';

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <div className='profile__container profile__container_type_profile-info'>
        <h4 className='profile__category'>Имя</h4>
        <p className='profile__text'>Виталий</p>
        <h4 className='profile__category'>E-mail</h4>
        <p className='profile__text'>pochta@yandex.ru</p>
      </div>
      <div className='profile__container profile__container_type_buttons'>
        <button className='profile__button profile__button_type_edit' type='button'>Редактировать</button>
        <button className='profile__button profile__button_type_signout' type='button'>Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
