import { Card } from "./Card.js";

export function openPopup(popup) {
  popup.classList.add("form-active", "formadd-active", "popup-active");
  // activePopup = popup;
  document.addEventListener("keydown", closeOnEscape)
} /// LO PUEDO BORRAR ?

export function closePopup(popup) {
  console.log(popup,"popup")
  popup.classList.remove("form-active", "formadd-active", "popup-active");
  // activePopup = null;
  document.removeEventListener("keydown", closeOnEscape)
}

const formEditName = document.querySelector(".form");
const formAddPlace = document.querySelector(".formadd__group");

const editButton = document.querySelector(".profile__edit-button");

const closeButtons = document.querySelectorAll(
  ".form__close, .formadd__close, .popup__close"
);

const addMenu = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const inputName = document.querySelector("#name");
const inputProfession = document.querySelector("#profession");
const inputTitle = document.querySelector("#inputTitle");
const inputImage = document.querySelector("#inputUrl");

formEditName.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(formEditName);
});

const formAddSection = document.querySelector(".formadd")

formAddPlace.addEventListener("submit", (evt) => {
  const cardsList = document.querySelector(".cards__list");
  const card = new Card(inputTitle.value, inputImage.value).createCard();
  evt.preventDefault();
  cardsList.prepend(card);
  closePopup(formAddSection);
  formAddPlace.reset();
});

editButton.addEventListener("click", () => openPopup(formEditName));
addMenu.addEventListener("click", () => openPopup(formAddSection));

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popup = btn.closest(".form, .formadd, .popup");
    closePopup(popup);
  });
});

export function closeOnEscape(evt){
  console.log(evt.key, "key")
  const popup = document.querySelector(".popup")
  if(evt.key === "Escape" && popup){
    closePopup(popup);
  }

};

document.querySelectorAll(".form__overlay, .formadd__overlay, .popup__overlay")
  .forEach(overlay => {
    overlay.addEventListener("click", (evt) => {
      if (evt.target === overlay) {
        const popup = overlay.closest(".form, .formadd, .popup");
        closePopup(popup);
      }
    });
  });