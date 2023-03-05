import {useEffect, useState} from 'react';
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(
          cardsData.map((item) => ({
            id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes,
          })))
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-wrapper">
          <img src={userAvatar} alt="аватар" className="profile__image"></img>
          <button
            type="button"
            className="profile__avatarar-edit-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit-wrapper">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Изменить"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements content__elements">
        <ul className="elements__list">
          {cards.map(({ id, ...props }) => (
            <Card
              key={id}
              {...props}
              card={{ id, ...props }}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
