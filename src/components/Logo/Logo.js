import'../Logo/Logo.css';

import React from 'react';
import logo from '../../images/logo.svg';

function Logo() {
  return (
    <img className="logo" src={logo} alt="Логотип приложения" />
  );
}

export default Logo;