import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={
        props.card
          ? `popup popup_${props.name} popup_opened`
          : `popup popup_${props.name}`
      }
    >
      <div className="popup__zoom-wrapper">
        <button
          type="button"
          className="popup__close-icon popup__close-icon_zoom-image"
          onClick={props.onClose}
        ></button>
        <figure className="popup__figure">
          <img
            src={props.card ? props.card.link : ""}
            className="popup__picture"
          ></img>
          <figcaption className="popup__figcaption">
            {props.card ? props.card.name : ""}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
