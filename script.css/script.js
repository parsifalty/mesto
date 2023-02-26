let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let editProfileButton = document.querySelector('.profile__info-button');
let grid = document.querySelector(".grid-net");
let hearts = document.querySelectorAll('.grid-net__item-button');
let userName = document.querySelector('.profile__info-fullname');
let occupation = document.querySelector('.profile__info-occupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__username');
let jobInput = document.querySelector('.popup__occupation');
let closeProfileButton = document.querySelector('.popup__close-button');
editProfileButton.addEventListener('click', popupEdit);

function popupEdit() {
 popup.classList.add('popup_opened');
 nameInput.value = userName.textContent;
 jobInput.value = occupation.textContent;
}

closeProfileButton.addEventListener('click', popupClosed);
function popupClosed() {
 popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 popupClosed();
}

formElement.addEventListener('submit', handleFormSubmit);
