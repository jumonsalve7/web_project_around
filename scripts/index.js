const editButton = document.querySelector(".profile__edit-button");
const addMenu = document.querySelector(".profile__add-button");

const formEditName = document.querySelector(".form");
const formAddPlace = document.querySelector(".formadd");
const popupImage = document.querySelector(".popup");

const closeButtons = document.querySelectorAll(
  ".form__close, .formadd__close, .popup__close"
);

const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const inputName = document.querySelector("#name");
const inputProfession = document.querySelector("#profession");

const inputTitle = document.querySelector("#inputTitle");
const inputImage = document.querySelector("#inputUrl");

const popupImgElement = document.querySelector(".popup__image");
const popupMessage = document.querySelector(".popup__message");

const templateCard = document.querySelector(".template-card");
const cardsList = document.querySelector(".cards__list");
const modalOverlay = document.querySelector(".form__overlay")

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((item) => {
  createCard(item.name, item.link);
});

function openPopup(popup) {
  popup.classList.add("form-active", "formadd-active", "popup-active");
  activePopup = popup;
  document.addEventListener("keydown", closeOnEscape)
}

function closePopup(popup) {
  popup.classList.remove("form-active", "formadd-active", "popup-active");
  activePopup = null;
  document.removeEventListener("keydown", closeOnEscape, closeOverlay)
}

editButton.addEventListener("click", () => openPopup(formEditName));
addMenu.addEventListener("click", () => openPopup(formAddPlace));

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popup = btn.closest(".form, .formadd, .popup");
    closePopup(popup);
  });
});

function closeOnEscape(evt){
  if(evt.key === "Escape" && activePopup){
    closePopup(activePopup);
  }
};

document.querySelectorAll(".form__overlay, .formadd__overlay, .popup__overlay")
  .forEach(overlay => {
    overlay.addEventListener("click", (evt) => {
      if (evt.target === overlay) {
        const popup = overlay.closest(".form, .formadd, .popup");
        closePopup(popup);
      }
    });
  });

function createCard(name, link) {
  const cloneCard = templateCard.content
    .querySelector(".cards__content")
    .cloneNode(true);

  const cardTitle = cloneCard.querySelector(".cards__content-description");
  const cardImage = cloneCard.querySelector(".cards__content-image");
  const cardLikeButton = cloneCard.querySelector(".cards__content-like");
  const deleteCard = cloneCard.querySelector(".cards__content-trash");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("cards__content-like_active");
  });

  deleteCard.addEventListener("click", () => {
    cloneCard.remove();
  });

  cardImage.addEventListener("click", () => {
    openPopup(popupImage);
    popupImgElement.src = link;
    popupImgElement.alt = name;
    popupMessage.textContent = name;
  });

  cardsList.prepend(cloneCard);
}

formEditName.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(formEditName);
});

formAddPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();
  createCard(inputTitle.value, inputImage.value);
  closePopup(formAddPlace);
  formAddPlace.reset();
});

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  buttonElement.disabled = hasInvalidInput(inputList);
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__placeholder"));
  const buttonElement = formElement.querySelector(".form__submit");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });

  toggleButtonState(inputList, buttonElement);
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll("form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formElement);
  });
};

enableValidation();

