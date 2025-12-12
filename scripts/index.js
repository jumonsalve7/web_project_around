import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import { profileName, profileProfession } from "./utils.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Photo from "../components/Photo.js";

const userInfo = new UserInfo({ name:".profile__name", profession:".profile__profession" });

const profileImage = document.querySelector(".profile__avatar");

const cardsList = document.querySelector(".cards__list");

export const popupImage = new PopupWithImage(".popup");
popupImage.setEventListeners();

// const popupWithForm = new PopupWithForm(".form");
// popupWithForm.setEventListeners();

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => popupWithForm.openPopUp());

const popupAddPlace = new PopupWithForm(".formadd");
popupAddPlace.setEventListeners();



const popupWithForm = new PopupWithForm(".form", (data) => {
  console.log(data)
  return api.editProfile({ name: data.profile, about: data.profession })
    .then(() => {
      userInfo.setUserInfo({ name: data.profile, profession: data.profession });
    });
});

popupWithForm.setEventListeners();

document.querySelector(".profile__edit-button")
  .addEventListener("click", () => popupWithForm.open());


export const deleteTrashButton = new PopupWithConfirmation(".delete");
deleteTrashButton.setEventListeners();

document
  .querySelector(".profile__add-button")
  .addEventListener("click", () => popupAddPlace.openPopUp());

new FormValidator().enableValidation();

api.getInitialCards().then((data) => {
  const section = new Section(
    data,

    (item) => {
      const card = new Card(
        item,
        () => popupImage.openPopUp(item.name, item.link),
        () => deleteTrashButton.open()
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
  profileImage.src = data.avatar;
});

const photo = new Photo(".photo");
const photoEditButton = document.querySelector(".profile__edit-pencil");

photoEditButton.addEventListener("click", () => {
  photo.open();
});

photo.setEventListeners();
