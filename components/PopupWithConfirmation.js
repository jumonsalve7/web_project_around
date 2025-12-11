import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open() {
    super.openPopUp();
  }

  close() {
    super.closePopUp();
  }

  setEventListeners() {
    super.setEventListeners();
    const deleteButtons = document.querySelectorAll(".cards__content-trash");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.open();
      });
    });
    const closeButton = this._popup.querySelector(".delete__card-button");
    closeButton.addEventListener("click", () => {
      this.closePopUp();
    });
  }
}
