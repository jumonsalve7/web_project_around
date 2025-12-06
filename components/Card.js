import { api } from "./Api.js";

export class Card {
  constructor(card, openPopup) {
    this._name = card.name;
    this._link = card.link;
    this._template = document
      .querySelector(".template-card")
      .content.querySelector(".cards__content");
    this._openPopup = openPopup;
    this._cardId = card._id;
    this._card = card;
  }

  getCloneElement() {
    return this._template.cloneNode(true);
  }

  createCard() {
    this.element = this.getCloneElement();
    this.element.querySelector(".cards__content-image").src = this._link;
    this.element.querySelector(".cards__content-image").alt = this._name;
    this.element.querySelector(".cards__content-description").textContent =
      this._name;

    this.setEventListeners(
      this.element.querySelector(".cards__content-trash"),
      this.element.querySelector(".cards__content-like"),
      this.element.querySelector(".cards__content-image")
    );

    return this.element;
  }

  deleteCard() {
    this.element.remove();
  }
  toggleCardLike(cardLikeButton) {
    cardLikeButton.classList.toggle("cards__content-like_active");
  }

  setEventListeners(deleteButton, cardLikeButton, cardImage) {
    deleteButton.addEventListener("click", () => {
      api.deleteCard(this._card._id).then(() => {
        this.deleteCard();
      });
    });
    cardLikeButton.addEventListener("click", () => {
      this.toggleCardLike(cardLikeButton);
      if (this._card.isLiked) {
        api.deleteLikeCard(this._card._id).then(() =>{
          this._card.isLiked = false
        });
      } else {
        const newCard = {...this._card, isLiked: true}
        api.addLikeCard(newCard).then(() => {
          this._card.isLiked = true
        });
      }
    });
    cardImage.addEventListener("click", () => {
      this.showPopup();
    });
    document.addEventListener("keydown", (evt) => {
      _handleEscClose(evt);
    });
  }

  showPopup() {
    const popupImage = document.querySelector(".popup");
    this._openPopup(popupImage);
    document.querySelector(".popup__image").src = this._link;
    document.querySelector(".popup__image").alt = this._name;
    document.querySelector(".popup__message").textContent = this._name;
  }

  toggleShowPopup() {
    popup.classList.add("form-active", "formadd-active", "popup-active");
    activePopup = popup;
    document.addEventListener("keydown", _handleEscClose);
  }

  clickImg() {
    this.cardImage.addEventListener("click", () => {
      this.toggleShowPopup();
    });
  }
}
