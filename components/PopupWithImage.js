import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popUpSelector) {
    super(popUpSelector);
    this._imageElement = document.querySelector(".popup__image");
    this._captionElement = document.querySelector(".popup__message");
  }

  openPopUp(name, link ) {

    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;

    super.openPopUp();
  }

  closePopUp(){
    super.closePopUp();
  }
}
