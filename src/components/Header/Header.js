import'../Header/Header.css';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header header__type_main">
      <Link to={'/'}>
        <Logo
          isAuth={false}
        />
      </Link>
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