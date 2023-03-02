import React from 'react';

function ImagePopup() {
    return (
        <div className="popup popup_zoom-image">
        <div className="popup__zoom-wrapper">
          <button
            type="button"
            className="popup__close-icon popup__close-icon_zoom-image">
          </button>
          <figure className="popup__figure">
            <img src="#" alt="" className="popup__picture"></img>
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>
      </div>
    );
  }
  
  export default ImagePopup;