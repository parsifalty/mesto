let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let editProfileButton = document.querySelector(".profile__info-button");
let grid = document.querySelector(".grid-net");
let hearts = document.querySelectorAll(".grid-net__item-button");
editProfileButton.addEventListener("click", popupEdit);

function popupEdit() {
 popup.classList.add("popup_opened");
 popup.style.removeProperty('visibility');
}

console.log(popup);

hearts.forEach((element) => 
element.addEventListener('click', (evt) => {
    evt.target.classList.toggle('grid-net__item-button_active');
    evt.target.classList.toggle('grid-net__item-button')
  }
));
console.log(popup);
let closeProfileButton = document.querySelector(".popup__close-button");
closeProfileButton.addEventListener("click", popupClosed);
console.log(popup);
function popupClosed() {
 popup.classList.remove("popup_opened");
}
console.log(popup);
let userName = document.querySelector(".profile__info-fullname");
let occupation = document.querySelector(".profile__info-occupation");

let formElement = document.querySelector(".popup__form");
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
