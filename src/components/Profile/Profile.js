import '../Profile/Profile.css';

import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({
  isLoading,
  submitError,
  handleUpdateUserInfo,
  setSubmitError,
  userSignOut
}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  function checkForDataUpdate(currentUserData, newData) {
    if (currentUserData === newData) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function handleNameChange(e) {
    const target = e.target;
    const name = target.name;

    setName(target.value);
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    checkForDataUpdate(currentUser.name, target.value);
  }

  function handleEmailChange(e) {
    const target = e.target;
    const name = target.name;

    setEmail(target.value);
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    checkForDataUpdate(currentUser.email, target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateUserInfo({ name, email })
    .catch(err => setSubmitError(err))
  }

  return (
    <section className={`profile ${isLoading && 'profile_hidden'}`}>
      <h2 className='profile__title'>{`Привет, ${name}!`}</h2>
      <form className='profile__form' name='user-update' noValidate onSubmit={handleSubmit}>
        <fieldset className='profile__form-container profile__form-container_type_profile-info'>
          <div className='profile__form-row'>
            <label className='profile__form-label'>Имя</label>
            <input 
              className={`profile__form-input ${errors.name && 'profile__form-input_type_error'}`}
              onChange={handleNameChange}
              type='text'
              id='name'
              name='name'
              value={name || ''}
              required
              minLength={2}
              maxLength={30}
              pattern='[A-Za-zа-яА-ЯёЁ\-\s]+'
            ></input>
          </div>
          <span className={`form__input-error ${errors.name && 'form__input-error_active'}`}>{errors.name || ''}</span>
          <div className='profile__form-row'>
            <label className='profile__form-label'>E-mail</label>
            <input 
              className={`profile__form-input ${errors.email && 'profile__form-input_type_error'}`}
              onChange={handleEmailChange}
              type='email'
              id='email'
              name='email'
              value={email || ''}
              required
            ></input>
          </div>
          <span className={`form__input-error ${errors.email && 'form__input-error_active'}`}>{errors.email || ''}</span>
        </fieldset>
        <div className='profile__form-container profile__form-container_type_buttons'>
          <span className={`form__submit-error ${submitError && 'form__submit-error_active'}`}>{submitError || ''}</span>
          <button 
            className={`profile__form-button profile__form-button_type_edit ${isEditing && 'profile__form-button_hidden'}`}
            type='button'
            onClick={() => {setIsEditing(!isEditing)}}
          >Редактировать</button>
          <button
            className={`profile__form-button profile__form-button_type_signout ${isEditing && 'profile__form-button_hidden'}`}
            type='button'
            onClick={userSignOut}
          >Выйти из аккаунта</button>
          <button
            className={
              isEditing
              ? `profile__form-button profile__form-button_type_save ${!isValid && 'profile__form-button_disabled'}`
              : 'profile__form-button profile__form-button_hidden'
            }
            type='submit'
            onClick={() => {setIsEditing(!isEditing)}}
            disabled={!isValid}
            value='Сохранить'
          >Сохранить</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
