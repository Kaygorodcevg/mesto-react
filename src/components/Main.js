import React from 'react';
import avatar from '../images/profile_image.jpg';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main className="content">
        <section className="profile content__profile">
          <div className="profile__avatar-wrapper">
          <img
            src={avatar}
            alt="аватар"
            className="profile__image"></img>
            <buttom type="button" className="profile__avatarar-edit-button" onClick={onEditAvatar}></buttom>
          </div>
          <div className="profile__info">
            <div className="profile__edit-wrapper">
              <h1 className="profile__title"></h1>
              <button
                type="button"
                className="profile__edit-button"
                aria-label="Изменить"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
        </section>

        <section className="elements content__elements">
          <ul className="elements__list"></ul>
        </section>

      </main>
    )
}

export default Main