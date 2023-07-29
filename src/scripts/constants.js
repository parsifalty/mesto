const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const popupProfile = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__info-button');
const userName = document.querySelector('.profile__info-fullname');
const occupation = document.querySelector('.profile__info-occupation');
const nameInput = document.querySelector('.popup__input_type_username');
const jobInput = document.querySelector('.popup__input_type_occupation');
const popupCloseButtons = document.querySelectorAll('.popup__close-button')
const popupImage = document.querySelector('.popup__image');
const popupSpan = document.querySelector('.popup__span');
const popupProfileForm = document.querySelector('#profile-create-form');
const cardCreate = document.querySelector('.popup_type_create-card');
const popupImageHolder = document.querySelector('.popup_type_image-overlay');
const cardCreateForm = document.querySelector('#card-create-form');
const cardCreateInputName = document.querySelector('.popup__input_type_place-name');
const cardCreateInputLink = document.querySelector('.popup__input_type_link');
const profileButton = document.querySelector('.profile__button');
const gridNet = document.querySelector('.grid-net');
const popups = document.querySelectorAll('.popup');
const config = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export { initialCards, popupProfile, profileEditButton, userName, occupation, nameInput, jobInput, popupCloseButtons, popupProfileForm, popupImageHolder, popupImage, popupSpan,  cardCreate, cardCreateForm, cardCreateInputName, cardCreateInputLink, profileButton,  gridNet, popups, config }