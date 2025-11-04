export class FormValidator{

  showError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
  };

  hideError(formElement, inputElement){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
  };

  checkInputValidity(formElement, inputElement){
    if (!inputElement.validity.valid) {
    this.showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    this.hideError(formElement, inputElement);
  }
  };

  hasInvalidInput(inputList){
    return inputList.some((inputElement) => !inputElement.validity.valid);
  };

  toggleButtonState(inputList, buttonElement){
    buttonElement.disabled = this.hasInvalidInput(inputList);
  };

  setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(".form__placeholder"));
    const buttonElement = formElement.querySelector(".form__submit");

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(formElement, inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });

    this.toggleButtonState(inputList, buttonElement);
};

enableValidation(){
  const formList = Array.from(document.querySelectorAll("form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this.setEventListeners(formElement);
  });
};

};