import { Card } from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";

const formEditName = document.querySelector(".form");
const editButton = document.querySelector(".profile__edit-button");
const addMenu = document.querySelector(".profile__add-button");
export const profileName = document.querySelector(".profile__name");
export const profileProfession = document.querySelector(".profile__profession");
const inputName = document.querySelector("#name");
const inputProfession = document.querySelector("#profession");

formEditName.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(formEditName);
});

editButton.addEventListener("click", () => PopupWithForm.open());
addMenu.addEventListener("click", () => PopupWithForm.open());
