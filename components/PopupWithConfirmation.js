import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._setTrashListeners();
  }
  open() {
    this.openPopUp();
  }

  close() {
    this.closePopUp();
  }

  _setTrashListeners() {
    const deleteButtons = document.querySelectorAll(".cards__content-trash");

    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.openPopUp();
      });
    });
  }

}
