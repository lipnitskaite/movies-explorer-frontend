import'../Header/Header.css';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header(props) {
  return (
    <header className={props.isLoggedIn ? "header" : "header header__type_main"}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <nav className={props.isLoggedIn ? 'header__nav header__nav_disabled' : 'header__nav'}>
        <ul className='header__list'>
          <li className='header__nav_item'><NavLink to={`./signup`} className="header__link">Регистрация</NavLink></li>
          <li className='header__nav_item'><NavLink to={`./signin`} className="header__link header__link_type_button">Войти</NavLink></li>
        </ul> 
      </nav>
      <button className={props.isLoggedIn ? 'header__menu-button' : 'header__menu-button_disabled'} type='button'></button>
    </header>
  );
}

export default Header;