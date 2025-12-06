class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "c8f05b69-ed4c-4182-b70c-4bb6582f92c4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        profession: profession,
      }),
    }).then(this._checkResponse);
  }

  editPhoto() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: "c8f05b69-ed4c-4182-b70c-4bb6582f92c4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponse);
  }

  createCard({ name, link }) {
    console.log(name,link)
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  addLikeCard(card) {
    return fetch(`${this._baseUrl}/cards/${card._id}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(card)
    }).then(this._checkResponse);
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // otros métodos para trabajar con la API
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "c8f05b69-ed4c-4182-b70c-4bb6582f92c4",
    "Content-Type": "application/json",
  },
});
