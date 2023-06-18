import { Card } from '../scripts/Card.js'
import { FormValidator } from './FormValidator.js'
import { initialCards, popupProfile, profileEditButton, userName, occupation, nameInput, jobInput, popupCloseButtons, 
   popupProfileForm, cardCreate, cardCreateForm, cardCreateInputName, cardCreateInputLink, profileButton, gridNet, popups, config } from './constants.js'

popups.forEach( (popup) => { 
  popup.addEventListener('click', (evt) => { 
    if(evt.target === popup){ 
      closePopup(popup);
    }
  })
})


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
  
  document.addEventListener('keydown', closeEscape);
}

function removeEscapeListener(){ 
  document.removeEventListener('keydown', closeEscape);
  
}


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
 const currentPopup = button.closest('.popup')
 closePopup(currentPopup)

 })
});

function handlePopupProfileSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 closePopup(popupProfile);
}
popupProfileForm.addEventListener('submit', handlePopupProfileSubmit);

 

function addCard(link, url){ 
  const newCard = new Card({link:link , name: url}, '#template-card', openPopup);
  const cardElement = newCard.generateCard()
  gridNet.prepend(cardElement);
} 

function handleCardformSubmit(evt) {
  evt.preventDefault();
  addCard(cardCreateInputLink.value, cardCreateInputName.value);
  evt.target.reset();
  closePopup(cardCreate);
  addCardForm.toggleStateButton()
 }
cardCreateForm.addEventListener('submit', handleCardformSubmit);

initialCards.forEach( item => { 
  addCard(item.link, item.name);
 })


const profileForm = new FormValidator(config, document.querySelector('.popup_type_profile'))
profileForm.enableValidation()


const addCardForm = new FormValidator(config, document.querySelector('.popup_type_create-card'))
addCardForm.enableValidation()


export { openPopup }