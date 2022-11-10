import '../InfoTooltip/InfoTooltip.css';
import React from 'react';
import successImage from '../../images/registration_success.svg';
import failImage from '../../images/registration_fail.svg';

function InfoTooltip({
  isOpen,
  isSuccessful,
  onClose,
  operationResultMessage
  }) {
  return (
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <figure className="popup__response-container">
          <img
            className="popup__image"
            src={isSuccessful ? successImage : failImage}
            alt="Изображение, отображающее, успешно ли выполнена операция"
          />
          <p className="popup__text">{operationResultMessage}</p>
        </figure>
      </div>
    </section>
  );
}

export default InfoTooltip;
