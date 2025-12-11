import Popup from "./Popup.js";
import { api } from "./Api.js";
import { popupImage } from "../scripts/index.js";

export default class Photo extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._form = document.querySelector(".photo__group");
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
    const closePopUp = document.querySelector(".photo__close");
    closePopUp.addEventListener("click", () => {
      this.close();
    });
    this._form.addEventListener("submit", ()=>{
      const input = this._getInputValues()
      const profileImage = document.querySelector(".profile__avatar")
      profileImage.src = input.url;
      this.close();
      api.editPhoto(input.url)
    })
  }
}
