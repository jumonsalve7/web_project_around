import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupImgElement = document.querySelector(".popup__image");
const popupMessage = document.querySelector(".popup__message");

const templateCard = document.querySelector(".template-card");
const cardsList = document.querySelector(".cards__list");
const modalOverlay = document.querySelector(".form__overlay")

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const renderCard = (name, link, cardsList) => {
    const cardElement = new Card(name, link).createCard();
    cardsList.prepend(cardElement);
}

initialCards.forEach((item) => {
  renderCard(item.name, item.link, cardsList);
});

new FormValidator().enableValidation();

