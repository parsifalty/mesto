
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
profileEditButton.addEventListener('click', function(){
popupOpened(popup);
});

function popupOpened(element){
element.classList.add('popup_active');
}


function popupClosed(element){ 
  element.classList.remove('popup_active');
}


//function popupEdit() {
 //popup.classList.add('popup_active');
 
//}

nameInput.value = userName.textContent;
jobInput.value = occupation.textContent; 

profileCloseButton.addEventListener('click', function(){ 
popupClosed(popup);
});
//function popupClosed() {
//popup.classList.remove('popup_active');
//}

function handlePopupSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 popupClosed(popup);
}
popupForm.addEventListener('submit', handlePopupSubmit);

function createCard(link, name){
  const TemplateCard = document.querySelector('#template-card').content;
  const card = TemplateCard.querySelector('.grid-net__item').cloneNode(true);
  const cardImage = card.querySelector('.grid-net__item-image');
  cardImage.src = link;
  cardImage.alt = 'просторы'
  cardImage.addEventListener('click', function(){
  imageHolder.classList.add('image-overlay_active');
  hh.setAttribute('src', link);
  gridNetSpan.textContent = name;
  imageHolderBox.classList.add('grid-net__item-image_active');
  });
  card.querySelector('.grid-net__item-title').textContent = name;
  card.querySelector('.grid-net__item-button').addEventListener('click', function(){
  card.querySelector('.grid-net__item-button').classList.toggle('grid-net__item-button_active');
  });
  card.querySelector('.grid-net__item-box');
  const deleteButton = card.querySelector('.grid-net__item-button-delete');
  deleteButton.addEventListener('click', function(){
    const listItem = deleteButton.closest('.grid-net__item');
  
    listItem.remove();
  })
  return card
  }

initialCards.forEach(element => {
const cardElement = createCard(element.link, element.name);
gridNet.prepend(cardElement)}
);



imageHolderCloseButton.addEventListener('click', function(){
    imageHolder.classList.toggle('image-overlay_active');
});


profileButton.addEventListener('click', function(){ popupOpened(cardCreate);});
cardCreateCloseButton.addEventListener('click', function(){ popupClosed(cardCreate)});



function addCard(){ 
  const NewCard = createCard(cardCreateInputLink.value, cardCreateInputName.value);
  gridNet.prepend(NewCard);
}

function handleCardformSubmit(evt) {
  evt.preventDefault();
  popupClosed(cardCreate);
  addCard();
  cardCreateInputName.value = '';
  cardCreateInputLink.value = '';
 }
 createCardForm.addEventListener('submit', handleCardformSubmit);
