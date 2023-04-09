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

const popup = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__info-button');
const userName = document.querySelector('.profile__info-fullname');
const occupation = document.querySelector('.profile__info-occupation');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_username');
const jobInput = document.querySelector('.popup__input_type_occupation');
const profileCloseButton = document.querySelector('.popup__close-button');
const hearts = document.querySelectorAll('.grid-net__item-button');
const gridImages = document.querySelector('.grid-net__item-image');
const gridTitle = document.querySelector('.grid-net__item-title');
const imageHolder = document.querySelector('.image-overlay');
const imageHolderBox = document.querySelector('.image-overlay__holder');
const hh = document.querySelector('.image-overlay__picture');
const imageHolderCloseButton = document.querySelector('.image-overlay__button'); 
const popupForm = document.querySelector('.popup__form');
const createCardForm = document.querySelector('.card-create__form');
const gridNetSpan = document.querySelector('.image-overlay__span');
const cardCreate = document.querySelector('.popup_type_card');
const cardCreateForm = document.querySelector('.card-create__form');
const cardCreateCloseButton = document.querySelector('.card-create__close-button');
const cardCreateInputName = document.querySelector('.card-create__input_type_name');
const cardCreateInputLink = document.querySelector('.card-create__input_type_link');
const profileButton = document.querySelector('.profile__button');
const itemArticle = document.querySelectorAll('.grid-net__item');
const gridItemBox = document.querySelector('.grid-net__item-box');
const gridNet = document.querySelector('.grid-net')
const cardCreateSubmit = document.querySelector('.card-create__submit');
