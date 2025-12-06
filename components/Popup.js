export default class Popup {
  constructor(popUpSelector) {
    this._popup = document.querySelector(popUpSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopUp() {
    this._popup.classList.add("form-active", "formadd-active", "popup-active","delete-active");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopUp() {
    this._popup.classList.remove("form-active", "formadd-active", "popup-active","delete-active");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopUp();
    }
  }

  setEventListeners() {
    const closeButtons = this._popup.querySelectorAll(
      ".form__close, .formadd__close, .popup__close, .delete__close"
    );
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.closePopUp());
    });
  }
}
