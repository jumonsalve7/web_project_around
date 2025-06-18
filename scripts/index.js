let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close");
let formContainer = document.querySelector(".form__container");
let form = document.querySelector(".form");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let inputName = document.querySelector("#name");
let inputProfession = document.querySelector("#profession");
let submitButton = document.querySelector(".form__submit")
let likeButton = document.querySelector(".elements__content-like");

function openMenu (){
  form.classList.add("form-active");
};

function closeMenu(){
  form.classList.remove("form-active");
};

function likePhoto(){
  likeButton.classList.toggle("elements__content-like_active");
};

editButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
likeButton.addEventListener("click", likePhoto);

formContainer.addEventListener("submit", function (evt) {
evt.preventDefault();
profileName.textContent = inputName.value;
profileProfession.textContent = inputProfession.value;
closeMenu();
});