const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const editProfileButton = document.querySelector(".profile__info-button");
const grid = document.querySelector(".grid-net");
const hearts = grid.querySelectorAll(".grid-net__item-button");
editProfileButton.addEventListener("click", popupEdit);

function popupEdit() {
 popup.classList.add("popup_opened");
}

hearts.forEach((element) => 
element.addEventListener('click', (evt) => {
    evt.target.classList.toggle('grid-net__item-button_active');
    evt.target.classList.toggle('grid-net__item-button')
  }
));

const closeProfileButton = document.querySelector(".popup__close-button");
closeProfileButton.addEventListener("click", popupClosed);

function popupClosed() {
 popup.classList.remove("popup_opened");
}

const userName = document.querySelector(".profile__info-fullname");
const occupation = document.querySelector(".profile__info-occupation");

const formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__username");
nameInput.value = userName.textContent;
let jobInput = document.querySelector(".popup__occupation");
jobInput.value = occupation.textContent;

function handleFormSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 popupClosed();
}

formElement.addEventListener("submit", handleFormSubmit);
