import '../Auth.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Logo/Logo';

function Register() {
  return (
    <section className='auth'>
      <form className='form'>
        <Link className='auth__logo-link' to={'/'}>
          <Logo />
        </Link>
        <h2 className='form__title'>Рады видеть!</h2>
        <fieldset className='form__container'>
          <label className='form__label' for='email'>E-mail</label>
          <input className='form__input' type='email' id='email' required></input>
          <label className='form__label' for='password'>Пароль</label>
          <input className='form__input' type='password' id='password' required></input>
        </fieldset>
        <button className='form__button' type='submit'>Войти</button>
      </form>
      <p className='auth__text'>Ещё не зарегистрированы? <Link className='auth__link' to={`./signup`}>Регистрация</Link></p>
    </section>
  );
}

export default Register;
