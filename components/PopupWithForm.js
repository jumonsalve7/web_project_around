import Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._popupSelector = document.querySelector(popupSelector);
  };

  open(){
    super.openPopUp();
  };

  close(){
    super.closePopUp();
  };

  _getInputValues(){
    const inputsValue = {};
    const inputs = Array.from(this._popupSelector.querySelectorAll(".form__placeholder"))

    inputs.forEach(input =>{
      if(input.name){
      inputsValue[input.name] = input.value;
      };
    });

    return inputsValue;
  };

  setEventListeners(){
    super.setEventListeners();

    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues =this._getInputValues();
    });

}
}