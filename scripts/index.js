import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "./utils.js";

const cardsList = document.querySelector(".cards__list");

const userInfo = new UserInfo({
  name: ".profile__name",
  profession: ".profile__profession",
});

const popupImage = new PopupWithImage(".popup");
popupImage.setEventListeners();
popupImage.openPopUp();

const popupWithForm = new PopupWithForm(".form");
popupWithForm.setEventListeners();

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => popupWithForm.openPopUp());

const popupAddPlace = new PopupWithForm(".formadd");
popupAddPlace.setEventListeners();

document
  .querySelector(".profile__add-button")
  .addEventListener("click", () => popupAddPlace.openPopUp());

const section = new Section(
  initialCards,

  (item) => {
    const card = new Card(item.name, item.link, () =>
      popupImage.openPopUp(item.name, item.link)
    );
    const element = card.createCard();

    cardsList.appendChild(element);
  }
);

section.renderItems();

const renderCard = (name, link, cardsList) => {
  const cardElement = new Card(name, link).createCard();
  cardsList.prepend(cardElement);
};

// initialCards.forEach((item) => {
//   renderCard(item.name, item.link, cardsList);
// });

new FormValidator().enableValidation();
