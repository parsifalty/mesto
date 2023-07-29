import { Card } from './scripts/Card.js'
import { FormValidator } from './scripts/FormValidator.js'
import { Section } from './scripts/Section.js'
import Popup from './scripts/Popup.js'
import UserInfo from './scripts/UserInfo.js'
import { initialCards, popupProfile, profileEditButton, userName, occupation, nameInput, jobInput, popupCloseButtons, 
  popupProfileForm, cardCreate, cardCreateForm, cardCreateInputName, cardCreateInputLink, profileButton, gridNet, popups, config, popupImageHolder, popupImage } from './scripts/constants.js'
import PopupWithForm from './scripts/PopupWithForm.js'
import PopupWithImage from './scripts/PopupWithImage.js'
import './pages/index.css'

const profileForm = new FormValidator(config, document.querySelector('.popup_type_profile'))
profileForm.enableValidation()


const addCardForm = new FormValidator(config, document.querySelector('.popup_type_create-card'))
addCardForm.enableValidation()

const profilePopup = new Popup(popupProfile)
profilePopup._setEventListeners()

const cardPopup = new Popup(cardCreate)
cardPopup._setEventListeners()

let userData = new UserInfo({
  nameSelector: '.profile__info-fullname',
  occupationSelector: '.profile__info-occupation'
})

profileEditButton.addEventListener('click', () => {
profilePopup.open();
const {name, occupation} = userData.getUserInfo()
jobInput.value = occupation;
nameInput.value = name;
}); 

const profileFormMade = new PopupWithForm(popupProfile, {
  formCallBack: handlePopupProfileSubmit => { 
    handlePopupProfileSubmit.occupation = jobInput.value
    handlePopupProfileSubmit.name = nameInput.value
    userData.setUserInfo(handlePopupProfileSubmit)
    profilePopup.close();
  } 
})
profileFormMade.setEventListeners()

profileButton.addEventListener('click', () => {
  cardPopup.open();
});

const popupWithImage = new PopupWithImage(popupImageHolder)
popupWithImage._setEventListeners()


function createCard(link, name){ 
  const newCard = new Card({link:link , name: name}, '#template-card', popupWithImage.open);
  const cardElement = newCard.generateCard()
  return cardElement
} 

const cardList = new Section( 
  {
    items: initialCards,
    renderer: (item) => { 
     const card = createCard(item.link, item.name)
      cardList.addItem(card);
    }
  }, gridNet
)

cardList.renderItems()


 const cardFormMade = new PopupWithForm(cardCreate, { 
  formCallBack: handleCardformSubmit => { 
   const card = createCard(handleCardformSubmit.link, handleCardformSubmit.name);
   cardList.addItem(card)
    cardFormMade._close()
    addCardForm.toggleStateButton()
  }
 })
cardFormMade.setEventListeners()






