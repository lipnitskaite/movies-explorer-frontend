import'../Header/Header.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);

  const openNavigationPopup = () => {setIsNavigationPopupOpen(true)};
  const closeNavigationPopup = () => {setIsNavigationPopupOpen(false)};

  return (
    <header className='header'>
      <Link to={'/'}>
        <Logo />
      </Link>
      <nav className={isLoggedIn ? 'header__nav header__nav_disabled' : 'header__nav'}>
        <ul className='header__list'>
          <li className='header__nav_item'><Link to={`./signup`} className="header__link">Регистрация</Link></li>
          <li className='header__nav_item'><Link to={`./signin`} className="header__link header__link_type_button">Войти</Link></li>
        </ul> 
      </nav>
      <button 
        className={isLoggedIn ? 'header__menu-button' : 'header__menu-button_disabled'}
        type='button'
        onClick={openNavigationPopup}
      ></button>
      <Navigation
        isLoggedIn={isLoggedIn}
        isOpen={isNavigationPopupOpen}
        onClose={closeNavigationPopup}
      />
    </header>
  );
}

export default Header;