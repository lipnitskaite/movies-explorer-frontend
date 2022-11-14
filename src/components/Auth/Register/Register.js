import '../Auth.css';

import React from 'react';
import UseFormValidation from '../../Validation/Validation';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';

function Register({
  handleRegister,
  submitError,
  setSubmitError,
  isDisabled,
}) {
  const { values, handleChange, errors, isValid, resetForm } = UseFormValidation();

  function handleSubmit(e) {
    e.preventDefault();

    handleRegister(values)
    .then(() => resetForm())
    .catch(err => setSubmitError(err))
  }
  return (
    <section className='auth'>
      <form className='form' name='user-register' noValidate onSubmit={handleSubmit}>
        <Link className='auth__logo-link' to={'/'}>
          <Logo />
        </Link>
        <h2 className='form__title'>Добро пожаловать!</h2>
        <fieldset className='form__container'>
          <label className='form__label' htmlFor='name'>Имя</label>
          <input 
            className={`form__input ${errors.name && 'form__input_type_error'}`}
            onChange={handleChange}
            type='text'
            id='name'
            name='name'
            value={values.name || ''}
            required
            minLength={2}
            maxLength={30}
            pattern='[A-Za-zа-яА-ЯёЁ\-\s]+'
            disabled={isDisabled}
          ></input>
          <span className={`form__input-error ${errors.name && 'form__input-error_active'}`}>{errors.name || ''}</span>
          <label className='form__label' htmlFor='email'>E-mail</label>
          <input
            className={`form__input ${errors.email && 'form__input_type_error'}`}
            onChange={handleChange}
            type='email'
            id='email'
            name='email'
            value={values.email || ''}
            required
            disabled={isDisabled}
          ></input>
          <span className={`form__input-error ${errors.email && 'form__input-error_active'}`}>{errors.email || ''}</span>
          <label className='form__label' htmlFor='password'>Пароль</label>
          <input
            className={`form__input ${errors.password && 'form__input_type_error'}`}
            onChange={handleChange}
            type='password'
            id='password'
            name='password'
            value={values.password || ''}
            required
            minLength={2}
            maxLength={30}
            disabled={isDisabled}
          ></input>
          <span className={`form__input-error ${errors.password && 'form__input-error_active'}`}>{errors.password || ''}</span>
        </fieldset>
        <span className={`form__submit-error ${submitError && 'form__submit-error_active'}`}>{submitError || ''}</span>
        <button 
          className={`form__button ${!isValid && 'form__button_disabled'}`}
          type='submit'
          value='Зарегистрироваться'
          disabled={!isValid ? true : false}
        >Зарегистрироваться</button>
      </form>
      <p className='auth__text'>Уже зарегистрированы? <Link className='auth__link' to={`./signin`}>Войти</Link></p>
    </section>
  );
}

export default Register;
