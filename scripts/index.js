let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close");
let formContainer = document.querySelector(".form__container");
let formEditName = document.querySelector(".form");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let inputName = document.querySelector("#name");
let inputProfession = document.querySelector("#profession");
let submitButton = document.querySelector(".form__submit")
let likeButton = document.querySelector(".cards__content-like");
const templateCard = document.querySelector(".template-card");
const cardsList = document.querySelector(".cards__list");
const deleteButton = document.querySelector(".cards__delete-button");
const addMenu = document.querySelector(".profile__add-button");
const formAddPlace = document.querySelector(".formadd");
const formAddClose = document.querySelector(".formadd__close");
const formAddContainer = document.querySelector(".formadd__container");
const inputTitle = document.querySelector("#inputTitle");
const inputImage = document.querySelector("#inputUrl");
const popupImage = document.querySelector(".popup");
const popupImgElement = document.querySelector(".popup__image");
const popupMessage = document.querySelector(".popup__message");
const popupClose = document.querySelector(".popup__close");



const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

initialCards.forEach(function(item){
  createCard(item.name, item.link);
})

function createCard(name,link){
  const cloneCard = templateCard.content.querySelector(".cards__content").cloneNode(true);
  const cardTitle = cloneCard.querySelector(".cards__content-description");
  const cardImage = cloneCard.querySelector(".cards__content-image");
  const cardLikeButton = cloneCard.querySelector(".cards__content-like");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardLikeButton.addEventListener("click", function(){
    cardLikeButton.classList.toggle("cards__content-like_active")
  });
  const deleteCard = cloneCard.querySelector(".cards__content-trash");
  deleteCard.addEventListener("click", function(){
    cloneCard.remove()
  })
  cardImage.addEventListener("click", function(){
    popupImage.classList.add("popup-active");
    popupImgElement.src = link;
    popupMessage.textContent = name;

  })
  cardsList.prepend(cloneCard);

}


function openAdd(){
  formAddPlace.classList.add("formadd-active")
}

function closeAdd(){
  formAddPlace.classList.remove("formadd-active")
}

addMenu.addEventListener("click", openAdd);
formAddClose.addEventListener("click", closeAdd);


function openMenu (){
  formEditName.classList.add("form-active");
};

function closeMenu(){
  formEditName.classList.remove("form-active");
};

function closeImage(){
  popupImage.classList.remove("popup-active");
};

editButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

formContainer.addEventListener("submit", function (evt) {
evt.preventDefault();
profileName.textContent = inputName.value;
profileProfession.textContent = inputProfession.value;
closeMenu();
});


formAddContainer.addEventListener("submit", function (evt) {
evt.preventDefault();
createCard(inputTitle.value,inputImage.value);
closeAdd();
});

inputImage.addEventListener("click", function(){

});

popupClose.addEventListener("click", closeImage);
