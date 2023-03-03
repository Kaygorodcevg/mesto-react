class Api {
  constructor(options) {
    this._options = options;
    this._url = this._options.url;
    this._headers = this._options.headers;
  }

  _serverAnswerHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._serverAnswerHandler);
  }

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._serverAnswerHandler);
  }

  changeUserInfo(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._serverAnswerHandler);
  }

  getNewCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.placeName,
        link: data.placeUrl,
      }),
    }).then(this._serverAnswerHandler);
  }

  changeAvatar({ avatar }) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._serverAnswerHandler);
  }

  cardLike(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._serverAnswerHandler);
  }

  deleteCardLike(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._serverAnswerHandler);
  }

  deleteCard(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._serverAnswerHandler);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: "6d5ca40b-b2c8-43db-98ef-021708183295",
    "Content-Type": "application/json",
  },
});

export default api;
