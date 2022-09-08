import'../Logo/Logo.css';

import React from 'react';
import logo from '../../images/logo.svg';

function Logo(props) {
  return (
    <img className={props.isAuth ? "logo logo__type_auth" : "logo"} src={logo} alt="Логотип приложения" />
  );
}

export default Logo;