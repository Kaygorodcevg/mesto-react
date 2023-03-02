import React from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState("");
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState("");
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState("");


  function handleEditAvatarClick () {
    setEditAvatarPopupOpen("popup_opened")
  }

  function handleEditProfileClick () {
    setEditProfilePopupOpen("popup_opened")
  }

  function handleAddPlaceClick () {
    setAddPlacePopupOpen("popup_opened")
  }

  function closeAllPopups () {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer />
      
      <PopupWithForm     
        name='popup_profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
         <div className="popup__input-wrapper">
              <input
                id="name-input"
                name="name"
                type="text"
                className="popup__input popup__input_type_name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required/>
              <span className="popup__input-error name-input-error"></span>
            </div>
            <div className="popup__input-wrapper">
              <input
                id="job-input"
                name="about"
                type="text"
                className="popup__input popup__input_type_job"
                placeholder="Профессия"
                minlength="2"
                maxlength="200"
                required/>
              <span className="popup__input-error job-input-error"></span>
              <button className="popup__submit-button" type="submit">
              Сохранить
            </button>
            </div>
      </PopupWithForm>

      <PopupWithForm     
        name='popup_add-card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
           <div className="popup__input-wrapper">
              <input
                name="placeName"
                id="placeName-input"
                type="text"
                className="popup__input popup__input_place_name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required/>
              <span className="popup__input-error placeName-input-error"></span>
            </div>
            <div className="popup__input-wrapper">
              <input
                name="placeUrl"
                id="url-input"
                type="url"
                className="popup__input popup__input_place_url"
                placeholder="Ссылка на картинку"
                required/>
              <span className="popup__input-error url-input-error"></span>
            </div>
            <button className="popup__submit-button popup__submit-button_cards" type="submit">
              Создать
            </button>
      </PopupWithForm>

      <PopupWithForm     
        name='popup_avatar-edit'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <div className="popup__input-wrapper">
            <input
              name="avatar"
              id="avatarUrl-input"
              type="url"
              className="popup__input popup__input_avatar"
              placeholder="Загрузите новый аватар"
              required/>
            <span className="popup__input-error avatarUrl-input-error"></span>
          </div>
          <button className="popup__submit-button popup__submit-button_avatar" type="submit">
            Сохранить
          </button>
      </PopupWithForm>

  

      <template id="elements__template">
        <li className="elements__list-item">
          <img className="elements__image elements__image_template"></img>
          <div className="elements__discription">
            <h2 className="elements__text elements__text_template"></h2>
            <div className="elements__reaction-wrapper">
            <button type="button" className="elements__reaction"></button>
            <span className="elements__counter">0</span>
          </div>
          </div>
          <button type="button" className="elements__remove-button"></button>
        </li>
      </template>


 
    <div className="popup popup_deleteCard">
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon popup__close-icon_deleteCard">
        </button>
        <form
          name="deleteCard"
          className="popup__form popup__form_deleteCard"
          novalidate>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__submit-button popup__submit-button_deleteCard" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>
  


<ImagePopup></ImagePopup>

</div>
  );
}

export default App;
