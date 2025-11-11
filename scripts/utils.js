import { Card } from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";

// export function openPopup(popup) {
//   popup.classList.add("form-active", "formadd-active", "popup-active");
//   document.addEventListener("keydown", closeOnEscape)
//  }

// export function closePopup(popup) {
//   console.log(popup,"popup")
//   popup.classList.remove("form-active", "formadd-active", "popup-active");
//   document.removeEventListener("keydown", closeOnEscape)
// }

export const initialCards = [
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

const formEditName = document.querySelector(".form");
const formAddPlace = document.querySelector(".formadd__group");

const editButton = document.querySelector(".profile__edit-button");

const closeButtons = document.querySelectorAll(
  ".form__close, .formadd__close, .popup__close"
); // BORRAR

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

editButton.addEventListener("click", () => PopupWithForm.open());
addMenu.addEventListener("click", () => PopupWithForm.open());

// closeButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const popup = btn.closest(".form, .formadd, .popup");
//     PopupWithForm.close(popup);
//   });
// });

// export function closeOnEscape(evt){
//   const popup = document.querySelector(".popup")
//   if(evt.key === "Escape" && popup){
//     closePopup(popup);
//   }

// }; // SE PEUDE BORRRAR

// document.querySelectorAll(".form__overlay, .formadd__overlay, .popup__overlay")
//   .forEach(overlay => {
//     overlay.addEventListener("click", (evt) => {
//       if (evt.target === overlay) {
//         const popup = overlay.closest(".form, .formadd, .popup");
//         closePopup(popup);
//       }
//     });
//   });