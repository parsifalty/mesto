
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
const popup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__info-button');
const userName = document.querySelector('.profile__info-fullname');
const occupation = document.querySelector('.profile__info-occupation');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_username');
const jobInput = document.querySelector('.popup__input_type_occupation');
const closeProfileButton = document.querySelector('.popup__close-button');
const hearts = document.querySelectorAll('.grid-net__item-button');
const gridImage = document.querySelectorAll('.grid-net__item-image');
const gridTitle = document.querySelectorAll('.grid-net__item-title');
const imageHolder = document.querySelector('.grid-net__item-image-overlay');
const hh = document.querySelector('.grid-net__item-image-holder');
const imageHolderCloseButton = document.querySelector('.grid-net__item-image-close-button');
const popupForm = document.querySelector('.popup__form');
const createCardy = document.querySelector('.card-create__form');
const gridNetSpan = document.querySelector('.grid-net__item-image-overlay-span');
const cardCreate = document.querySelector('.card-create');
const cardCreateForm = document.querySelector('.card-create__form');
const cardCreateCloseButton = document.querySelector('.card-create__close-button');
const cardCreateInputName = document.querySelector('.card-create__input_type_name');
const cardCreateInputLink = document.querySelector('.card-create__input_type_link');
const profileButton = document.querySelector('.profile__button');
const itemArticle = document.querySelectorAll('.grid-net__item');
const gridItemBox = document.querySelector('.grid-net__item-box');
const gridNet = document.querySelector('.grid-net')
const cardCreateSubmit = document.querySelector('.card-create__submit');
editProfileButton.addEventListener('click', popupEdit);

function popupEdit() {
 popup.classList.add('popup_active');
 nameInput.value = userName.textContent;
 jobInput.value = occupation.textContent;
}

closeProfileButton.addEventListener('click', popupClosed);
function popupClosed() {
popup.classList.remove('popup_active');
}

function handleFormSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 popupClosed();
}
popupForm.addEventListener('submit', handleFormSubmit);

hearts.forEach((element) => 
element.addEventListener('click', goods));
function goods(evt) {
    evt.target.classList.toggle('grid-net__item-button_active');
    evt.target.classList.toggle('grid-net__item-button')
};

for(let i = 0; i < gridImage.length; i++){ 
    gridImage[i].src = initialCards[i].link;
}

for(let i = 0; i < gridTitle.length; i++){
    gridTitle[i].textContent = initialCards[i].name;
}

gridImage.forEach((element) => 
element.addEventListener('click',function (){ 
imageHolder.classList.toggle('grid-net__item-image-overlay_active');
hh.setAttribute('src', element.src);
hh.classList.toggle('grid-net__item-image_active'); 
}));

imageHolderCloseButton.addEventListener('click', function(){
    imageHolder.classList.remove('grid-net__item-image-overlay_active');
})

itemArticle.forEach((element) => 
element.addEventListener('click', function(){
  gridNetSpan.textContent = element.textContent
}))

profileButton.addEventListener('click', cardCreateOpened);
cardCreateCloseButton.addEventListener('click', cardCreateClosed);

function cardCreateOpened() { 
    cardCreate.classList.add('card-create_active');
}

function cardCreateClosed() {
    cardCreate.classList.remove('card-create_active');
}

function createCard(link, name){
const TemplateCard = document.querySelector('#template-card').content;
const card = TemplateCard.querySelector('.grid-net__item').cloneNode(true);
card.querySelector('.grid-net__item-image').src = link;
card.querySelector('.grid-net__item-image').addEventListener('click', function(){
imageHolder.classList.add('grid-net__item-image-overlay_active');
hh.setAttribute('src', link);
hh.classList.toggle('grid-net__item-image_active');
})
card.querySelector('.grid-net__item-title').textContent = name;
card.querySelector('.grid-net__item-button').addEventListener('click', function(){
card.querySelector('.grid-net__item-button').classList.remove('grid-net__item-button_active');
});
card.querySelector('.grid-net__item-box');
gridNetSpan.textContent = name;
const deleteButton = card.querySelector('.grid-net__item-button-delete');
deleteButton.addEventListener('click', function(){
  const listItem = deleteButton.closest('.grid-net__item');

  listItem.remove();
})
return card
}

function addCard(){ 
  const NewCard = createCard(cardCreateInputLink.value, cardCreateInputName.value);
  gridNet.prepend(NewCard);
}

function handleFormSubmity(evt) {
  evt.preventDefault();
  cardCreateClosed();
  addCard();
  cardCreateInputName.value = '';
  cardCreateInputLink.value = '';
 }
 createCardy.addEventListener('submit', handleFormSubmity);

 const deleteCardButton = document.querySelectorAll('.grid-net__item-button-delete');
 deleteCardButton.forEach((element) =>
 element.addEventListener('click', function(){ 
  const deleted = element.closest('.grid-net__item');
  return deleted.remove()
 }));





