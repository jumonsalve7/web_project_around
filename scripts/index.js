import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import { profileName, profileProfession } from "./utils.js";
// import PopupWithConfirmation from "./PopupWithConfirmation.js";

const cardsList = document.querySelector(".cards__list");

const userInfo = new UserInfo({
  name: ".profile__name",
  profession: ".profile__profession",
});

export const popupImage = new PopupWithImage(".popup");
popupImage.setEventListeners();

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

new FormValidator().enableValidation();

api.getInitialCards().then((data) => {
  const section = new Section(
    data,

    (item) => {
      console.log(item)
      const card = new Card(item, () =>
        popupImage.openPopUp(item.name, item.link)
    );
      const element = card.createCard();

      cardsList.appendChild(element);
    }
  );
  section.renderItems();
});

api.getInitialData().then((data) => {
  profileName.textContent = data.name;
  profileProfession.textContent = data.about;
});


// const deletePopup = new PopupWithConfirmation(".delete-popup");
// deletePopup.setEventListeners();



