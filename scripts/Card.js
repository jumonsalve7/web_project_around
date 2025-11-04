 import { openPopup , closeOnEscape } from "./utils.js";

export class Card{
  constructor(name,link){
    this.name = name;
    this.link = link;
    this.template = document.querySelector(".template-card").content.querySelector(".cards__content");
  };

getCloneElement(){
  return this.template.cloneNode(true);
};

createCard(){
  this.element = this.getCloneElement();
  this.element.querySelector(".cards__content-image").src= this.link;
  this.element.querySelector(".cards__content-image").alt = this.name;
  this.element.querySelector(".cards__content-description").textContent = this.name;

  this.setEventListeners(this.element.querySelector(".cards__content-trash"), this.element.querySelector(".cards__content-like"), this.element.querySelector(".cards__content-image") );

  return this.element;
};

deleteCard(){
  this.element.remove();
};

toggleCardLike(cardLikeButton){
  cardLikeButton.classList.toggle("cards__content-like_active");
};

setEventListeners(deleteButton, cardLikeButton, cardImage){
  deleteButton.addEventListener("click", () =>{
    this.deleteCard();
  });
  cardLikeButton.addEventListener("click", () =>{
    this.toggleCardLike(cardLikeButton);
  });
  cardImage.addEventListener("click", () =>{
    this.showPopup()
  })
  document.addEventListener("keydown", (evt) =>{
    closeOnEscape(evt)
  })
};


showPopup(){
  const popupImage = document.querySelector(".popup");
  openPopup(popupImage)
  document.querySelector(".popup__image").src = this.link;
  document.querySelector(".popup__image").alt = this.name;
  document.querySelector(".popup__message").textContent = this.name;

};

toggleShowPopup(){
  popup.classList.add("form-active", "formadd-active", "popup-active");
    activePopup = popup;
    document.addEventListener("keydown", closeOnEscape)
}

clickImg(){
  this.cardImage.addEventListener("click", () =>{
    this.toggleShowPopup
  })
};


};
