import '../Register/Register.css';

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='auth'>
      <img className='auth__logo' src={logo} alt='Логотип приложения'></img>
      <form className='form'>
        <h2 className='form__title'>Добро пожаловать!</h2>
        <fieldset className='form__container'>
          <label className='form__label' for='name'>Имя</label>
          <input className='form__input' type='text' id='name' required></input>
          <label className='form__label' for='email'>E-mail</label>
          <input className='form__input' type='email' id='email' required></input>
          <label className='form__label' for='password'>Пароль</label>
          <input className='form__input' type='password' id='password' required></input>
        </fieldset>
        <button className='form__button' type='submit'>Зарегистрироваться</button>
      </form>
      <p className='auth__text'>Уже зарегистрированы? <Link className='auth__link' to={`./signin`}>Войти</Link></p>
    </section>
  );
}

export default Register;
