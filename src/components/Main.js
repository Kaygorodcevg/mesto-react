import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  handleCardLike,
  handleCardDelete,
}) {
  // const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  // React.useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((cardsData) => {
  //       setCards(cardsData);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // function handleCardLike(card) {
  //   const isLiked = card.likes.some((item) => item._id === currentUser._id);
  //   api
  //     .changeLikeCardStatus(card._id, !isLiked)
  //     .then((newCard) => {
  //       setCards((state) =>
  //         state.map((item) => (item._id === card._id ? newCard : item))
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleCardDelete(card) {
  //   api
  //     .deleteCard(card._id)
  //     .then(() => {
  //       setCards((state) => state.filter((item) => item._id !== card._id));
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-wrapper">
          <img
            src={currentUser.avatar}
            alt="аватар"
            className="profile__image"
          ></img>
          <button
            type="button"
            className="profile__avatarar-edit-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit-wrapper">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Изменить"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
