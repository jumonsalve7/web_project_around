import Popup from "./Popup.js";
import { Card } from "./Card.js";
import { api } from "./Api.js";
import { popupImage } from "../scripts/index.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    super.openPopUp();
  }

  close() {
    super.closePopUp();
  }

  _getInputValues() {
    const inputsValue = {};
    const inputs = Array.from(
      this._popupSelector.querySelectorAll(".form__placeholder")
    );

    inputs.forEach((input) => {
      if (input.name) {
        inputsValue[input.name] = input.value;
      }
    });

    return inputsValue;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      console.log(inputValues);
      api
        .createCard({ name: inputValues.place, link: inputValues.url })
        .then(() => {
          const cardsList = document.querySelector(".cards__list");
          const card = new Card(
            {
              name: inputValues.place,
              link: inputValues.url,
            },
            () => {
              popupImage.setEventListeners();
              popupImage.openPopUp(inputValues.place, inputValues.url);
            }
          ).createCard();
          evt.preventDefault();
          cardsList.prepend(card);
        })
        .then(() => {
          this.closePopUp();
        });
    });
  }
}
