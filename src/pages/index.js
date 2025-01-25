import "./index.css";

import HeaderSrc from "/src/images/logo.svg";
import PlusSrc from "/src/images/plus.svg";
import PencilSrc from "/src/images/pencil.svg";
import AvatarSrc from "/src/images/avatar.jpg";
import PencilLightSrc from "/src/images/pencil-light.svg";

const HeaderLogo = document.getElementById("header-logo");
HeaderLogo.src = HeaderSrc;

const PlusLogo = document.getElementById("plus");
PlusLogo.src = PlusSrc;

const PencilLogo = document.getElementById("pencil");
PencilLogo.src = PencilSrc;

const Avatar = document.getElementById("avatar");
Avatar.src = AvatarSrc;

const AvatarPencil = document.getElementById("pencil-light");
AvatarPencil.src = PencilLightSrc;

import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";
import Api from "../utils/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "b78caabf-43de-4c58-86fc-7378db5d190d",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, me]) => {
    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsList.append(cardElement);
    });
    profileAvatar.src = me.avatar;
    profileName.textContent = me.name;
    profileDescription.textContent = me.about;
  })
  .catch(console.error);

// Profile elements
const profileEditButton = document.querySelector(".profile__edit-btn");
const cardEditButton = document.querySelector(".profile__add-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__avatar");
const avatarModal = document.querySelector("#avatar-modal");

//Avatar form elements
const avatarEditButton = document.querySelector(".profile__avatar-btn");
const avatarFormElement = avatarModal.querySelector(".modal__form");
const avatarSubmitBtn = avatarModal.querySelector(".modal__submit-btn");
const avatarModalCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarLinkInput = avatarModal.querySelector("#profile-avatar-input");

// Form elements
const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__content");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

// Delete form elemenets
const deleteModal = document.querySelector("#delete-modal");
const deleteCloseBtn = deleteModal.querySelector(".modal__close-btn");
const deleteForm = deleteModal.querySelector(".modal__form");

// Card form elements
const cardModal = document.querySelector("#add-card-modal");
const cardFormElement = cardModal.querySelector(".modal__form");
const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

// Preview image popup elements
const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");

// Card related elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

let selectedCard, selectedCardId;

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardNameEl.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardImage.addEventListener("click", () => {
    openModal(previewModal);
    previewModalCaptionEl.textContent = data.name;
    previewModalImageEl.src = data.link;
    previewModalImageEl.alt = data.name;
  });

  cardLikeBtn.addEventListener("click", handleLike);
  cardDeleteBtn.addEventListener("click", (evt) =>
    handleDeleteCard(cardElement, data._id)
  );

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscClose);
  modal.addEventListener("mousedown", handleOverLayClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscClose);
  modal.removeEventListener("mousedown", handleOverLayClose);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editModal);
    })
    .catch(console.error);
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editAvatarInfo(avatarLinkInput.value)
    .then((data) => {
      profileAvatar.src = data.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  api
    .addNewCard(inputValues)
    .then((newCard) => {
      const cardElement = getCardElement(newCard);
      cardsList.prepend(cardElement);
      evt.target.reset();
      disableButton(cardSubmitBtn, settings);
      closeModal(cardModal);
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error);
}

function handleDeleteCard(cardElement, cardId) {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deleteModal);
}

function handleLike() {
  const cardLikeBtn = document.querySelector(".card__like-btn");
  cardLikeBtn.classList.toggle("card__like-button_liked");
}

profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editFormElement,
    [editModalNameInput, editModalDescriptionInput],
    settings
  );
  openModal(editModal);
});

editModalCloseBtn.addEventListener("click", () => {
  closeModal(editModal);
});

cardEditButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);
});

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

avatarEditButton.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarModalCloseBtn.addEventListener("click", () => {
  closeModal(avatarModal);
});

deleteCloseBtn.addEventListener("click", () => {
  closeModal(deleteModal);
});

editFormElement.addEventListener("submit", handleEditFormSubmit);

cardFormElement.addEventListener("submit", handleAddCardSubmit);

avatarFormElement.addEventListener("submit", handleAvatarSubmit);

deleteForm.addEventListener("submit", handleDeleteSubmit);

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_is-opened");
    closeModal(activeModal);
  }
}

function handleOverLayClose(evt) {
  if (evt.target.classList.contains("modal_is-opened")) {
    closeModal(evt.target);
  }
}

enableValidation(settings);
