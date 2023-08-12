import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  profileButton,
  profileEditButton,
  nameInput,
  jobInput,
  config,
  avatarButton,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-72',
  headers: {
    authorization: 'ee9de7f6-7aed-4e20-b5bf-f52e55007fe4',
   'Content-type': 'application/json'}
})

let userId 
api.getUserFromServer()
  .then((res) => { 
 userId = res._id
  })
  

api.getInitialCards()
  .then((res) => {
    
    const cardList = new Section({
      items: res, 
      renderer: (item) => { 
        const card = createCard(item);
        cardList.addItem(card);
      },
    }, '.grid-net')
    cardList.renderItems()
  })

const profileValidator = new FormValidator(
  config,
  document.querySelector(".popup_type_profile")
);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(
  config,
  document.querySelector(".popup_type_create-card")
);
addCardValidator.enableValidation();

const profileAvatarValidator = new FormValidator(config, 
  document.querySelector('.popup_type_profile-avatar')
  );
  
  profileAvatarValidator.enableValidation();

const userData = new UserInfo({
  nameSelector: ".profile__info-fullname",
  aboutSelector: ".profile__info-occupation",
  avatarSelector: ".profile__avatar"
});

api.getUserFromServer()
  .then((res) => { 
   userData.setUserInfo(res)
   userData.setUserAvatar(res)
  })

const profileFormMade = new PopupWithForm(".popup_type_profile", {
  formCallBack: (profileData) => {
    profileFormMade.setButtonText()
    api.setNewUserInfo(profileData)
  .then((res) => { 
    userData.setUserInfo(res)
  })
  .catch((err) => { 
    console.log(err)
  })
  .finally(() => { 
    profileFormMade.resetButtonText()
  })
  
    profileFormMade.close();
  },
  })

profileFormMade.setEventListeners();

profileEditButton.addEventListener("click", () => {
  profileFormMade.open();
api.getUserFromServer()
.then((res) => { 
    jobInput.value = res.about,
    nameInput.value = res.name
  })  
})

const popupWithImage = new PopupWithImage(".popup_type_image-overlay");
popupWithImage.setEventListeners();

const popupWithDelete = new PopupWithDelete('.popup_type_delete-card', (card) => {
  
  api.deleteCard(card._cardId)
  .then( () => {
    card.removeCardElement()
    popupWithDelete.close()
  })
  .catch((err) => { 
    console.log(err)
  })
});
popupWithDelete.setEventListeners();

function createCard(card) {
  const newCard = new Card(
    card,
    userId,
    {author: card.owner._id},
    "#template-card",
    popupWithImage.open,
    popupWithDelete.open,
    (_likeElement, _cardId) => { 
if (_likeElement.classList.contains('grid-net__item-button_active')){
  api.deleteLike(_cardId)
  .then( (res) => {
    newCard.likeToggle(res.likes)
  })
  .catch((err) => { 
    console.log(err)
  })
}
else { 
  api.addLike(_cardId)
  .then(res => { 
    newCard.likeToggle(res.likes)
  })
  .catch((err) => { 
    console.log(err)
  })
}
    }
  );
  return newCard.generateCard();
}


const cardFormMade = new PopupWithForm(".popup_type_create-card", {
  formCallBack: (newCardData) => {
    cardFormMade.setButtonText()
    api.addCard(newCardData)
    .catch((err) => { 
      console.log(err)
    })
    .finally(() => { 
      cardFormMade.resetButtonText()
    })
    cardFormMade.close();
  },
});
cardFormMade.setEventListeners();

profileButton.addEventListener("click", () => {
  cardFormMade.open();
  addCardValidator.toggleStateButton();
}); 


const avatarForm = new PopupWithForm('.popup_type_profile-avatar', {
  formCallBack: (avatarData) => { 
    avatarForm.setButtonText()
    api.addNewAvatar(avatarData)
  .then((res) => { 
    userData.setUserAvatar(res)
  })
  .catch((err) => { 
    console.log(err)
  })
  .finally(() => { 
    avatarForm.resetButtonText()
  })
  avatarForm.close()
  }
})
avatarForm.setEventListeners();

avatarButton.addEventListener('click', () => { 
  avatarForm.open()
})





