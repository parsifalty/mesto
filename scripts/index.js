popups.forEach( (popup) => { 
  popup.addEventListener('click', (evt) => { 
    if(evt.target === popup){ 
      closePopup(popup);
    }
  })
})
//////////////////

let escapeListener;

function closeEscape(evt){ 
  if(evt.key === 'Escape'){
    evt.preventDefault();
    const activePopup = document.querySelector('.popup_active');
    if (activePopup) {
      closePopup(activePopup);
    }
  }
}

function setEscapeListener() { 
  escapeListener = closeEscape;
  document.addEventListener('keydown', escapeListener);
}

function removeEscapeListener(){ 
  document.removeEventListener('keydown', escapeListener);
  escapeListener = null;
}



////////////////////

profileEditButton.addEventListener('click', function(){
openPopup(popupProfile);
nameInput.value = userName.textContent;
jobInput.value = occupation.textContent; 
}); 

function openPopup(element){
element.classList.add('popup_active');
setEscapeListener();
}

function closePopup(element){ 
  element.classList.remove('popup_active');
  removeEscapeListener()
}



profileButton.addEventListener('click', function(){
  openPopup(cardCreate);
 
});

popupCloseButtons.forEach((button) => {
 button.addEventListener('click' , function (){ 
 closePopup(popupProfile)
 closePopup(cardCreate);
 closePopup(popupImageHolder);
 })
});

function handlePopupProfileSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 closePopup(popupProfile);
}
popupProfileForm.addEventListener('submit', handlePopupProfileSubmit);

 /* function createCard(link, name){
  const templateCard = document.querySelector('#template-card').content;
  const card = templateCard.querySelector('.grid-net__item').cloneNode(true);
  const cardImage = card.querySelector('.grid-net__item-image');
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener('click', function(){
  openPopup(popupImageHolder);
  popupImage.setAttribute('src', link);
  popupImage.setAttribute('alt', name)
  popupSpan.textContent = name;
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
*/

function addCard(){ 
  const newCard = new Card({link:cardCreateInputLink.value, name:cardCreateInputName.value}, '#template-card');
  const cardElement = newCard.generateCard()
  gridNet.prepend(cardElement);
} 

function handleCardformSubmit(evt) {
  const inputList = Array.from(cardCreateForm.querySelectorAll(config.inputElement));
  const buttonElement = cardCreateForm.querySelector(config.buttonElement);


  evt.preventDefault();
  addCard();
  evt.target.reset();
  closePopup(cardCreate);
  toggleStateButton(inputList, buttonElement, config)
 }
cardCreateForm.addEventListener('submit', handleCardformSubmit);

/* function checkValidityButton(formElement, config){ 
  toggleStateButton(inputList, buttonElement, config);
} */

/*function ggg(formElement, config){
formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Проверяем валидность формы и дезактивируем кнопку сабмита, если нужно
  checkValidityButton(formElement, config);

  // Добавляем обработчик изменения значений в инпутах
  formElement.addEventListener('input', function() {
    toggleStateButton(inputList, buttonElement, config);
  });
});
} */

class Card { 
  constructor(card, templateSelector){ 
    this._image = card.link,
    this._title = card.name,
    this._templateSelector = templateSelector
  }

  _getTemplate() { 
const cardElement = document 
.querySelector(this._templateSelector)
.content
.querySelector('.grid-net__item')
.cloneNode(true)

return cardElement
  }

  _handleOpenPopup(){ 
    popupImage.src = this._image;
    popupImage.alt = this._title;
    popupSpan.textContent = this._title;
    openPopup(popupImageHolder)
  }

  /* _handleClosePopup(){ 
    popupImage.src = '';
    popupSpan.textContent = '';
    popupImage.alt = '';
    closePopup(popupImageHolder)
  } */

_setEventListeners(){ 
  this._element = this._getTemplate()
  this._element.querySelector('.grid-net__item-image').addEventListener('click', () => { 
    this._handleOpenPopup()
  })

  this._element.querySelector('.grid-net__item-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('grid-net__item-button_active')
  })

  const deleteButton = this._element.querySelector('.grid-net__item-button-delete');
  deleteButton.addEventListener('click', function(){
    const listItem = deleteButton.closest('.grid-net__item');
  
    listItem.remove();
  })

}

 generateCard(){ 
  this._element = this._getTemplate()
  this._setEventListeners()

  this._element.querySelector('.grid-net__item-image').src = this._image;
  this._element.querySelector('.grid-net__item-title').textContent = this._title;
  
  return this._element;
 }
}

initialCards.forEach( item => { 
 const card = new Card(item, '#template-card');
 const cardElement = card.generateCard()

 gridNet.prepend(cardElement)
})

  

