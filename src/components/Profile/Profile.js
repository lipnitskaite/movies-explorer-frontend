import '../Profile/Profile.css';

import React, { useContext, useEffect, useState } from 'react';
import UseFormValidation from '../Validation/Validation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ handleUpdateUserInfo, submitError, setSubmitError }) {
  const { values, handleChange, errors, isValid, resetForm } = UseFormValidation();

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateUserInfo(values)
    // .catch(err => setSubmitError(err))
    resetForm();
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${name}!`}</h2>
      <form className='profile__form' name='user-update' noValidate onSubmit={handleSubmit}>
        <fieldset className='profile__form-container profile__form-container_type_profile-info'>
          <label className='profile__form-label'>Имя</label>
          <input 
            className={`profile__form-input ${errors.name && 'profile__form-input_type_error'}`}
            onChange={handleChange}
            type='text'
            id='name'
            name='name'
            value={name || ''}
            required
            minLength={2}
            maxLength={30}
            pattern='[A-Za-zа-яА-ЯёЁ\-\s]+'
          ></input>
          <span className={`form__input-error ${errors.name && 'form__input-error_active'}`}>{errors.name || ''}</span>
          <label className='profile__form-label'>E-mail</label>
          <input 
            className={`profile__form-input ${errors.email && 'profile__form-input_type_error'}`}
            onChange={handleChange}
            type='email'
            id='email'
            name='email'
            value={email || ''}
            required
          ></input>
          <span className={`form__input-error ${errors.email && 'form__input-error_active'}`}>{errors.email || ''}</span>
        </fieldset>
        <div className='profile__form-container profile__form-container_type_buttons'>
          {/* <span className={`form__submit-error ${submitError && 'form__submit-error_active'}`}>{submitError || ''}</span> */}
          <button className='profile__form-button profile__form-button_type_edit' type='button'>Редактировать</button>
          <button className='profile__form-button profile__form-button_type_signout' type='button'>Выйти из аккаунта</button>
          <button
            className={`profile__form-button profile__form-button_type_save ${!isValid && 'profile__form-button_disabled'}`}
            type='submit'
            value='Сохранить'>Сохранить</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
