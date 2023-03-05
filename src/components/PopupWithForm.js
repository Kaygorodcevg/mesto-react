import React from "react";

function PopupWithForm({onClose, buttonText, isOpen, name, title, ...props}) {
  return (
    <div
      className={
        isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon"
          onClick={onClose}
        ></button>
        <form
          name={name}
          className="popup__form popup__form_profile"
          noValidate>
          <h2 className="popup__title">{title}</h2>
          {props.children}
          <button className="popup__submit-button" type="submit">
          {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
