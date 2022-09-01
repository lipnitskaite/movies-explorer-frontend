import'../Header/Header.css';

import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип приложения" className="header__logo" />
      <nav>
        <ul className='header__nav'>
          <li className='header__nav_item'><NavLink to={`./signup`} className="header__link">Регистрация</NavLink></li>
          <li className='header__nav_item'><NavLink to={`./signin`} className="header__link header__link_type_button">Войти</NavLink></li>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;