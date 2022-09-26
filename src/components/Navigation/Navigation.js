import'../Navigation/Navigation.css';

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
        
function Navigation({ isOpen, onClose }) {
  return (
    <section className={`menu ${isOpen && 'menu_opened'}`}>
      <div className="menu__overlay" onClick={onClose}></div>
      <div className='menu__container'>
        <button 
          className='menu__close-button'
          type='button'
          onClick={onClose}
        ></button>
        <nav className='menu__nav'>
          <ul className='menu__nav-list'>
            <li className='menu__nav-item'>
              <NavLink 
                className='menu__link menu__link_type_nav'
                to='/'
                exact={true}
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>
            <li className='menu__nav-item'>
              <NavLink
                className='menu__link menu__link_type_nav'
                to='/movies'
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>
            <li className='menu__nav-item'>
              <NavLink 
                className='menu__link menu__link_type_nav'
                to={'/saved-movies'}
                onClick={onClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>  
        </nav>
        <Link
          className='menu__link menu__link_type_main'
          to={'/profile'}
          onClick={onClose}
        >
          Аккаунт
        </Link>
      </div>
    </section> 
  );
}

export default Navigation;