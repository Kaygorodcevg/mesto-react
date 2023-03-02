import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
          <form
            name={props.name}
            className="popup__form popup__form_profile"
            novalidate>
            <h2 className="popup__title">{props.title}</h2>
            {props.children} 
          </form>
        </div>
        </div>
    );
  }
  
  export default PopupWithForm;