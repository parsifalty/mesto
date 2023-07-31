import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  profileButton,
  profileEditButton,
  nameInput,
  jobInput,
  config,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";

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

const userData = new UserInfo({
  nameSelector: ".profile__info-fullname",
  occupationSelector: ".profile__info-occupation",
});

const profileFormMade = new PopupWithForm(".popup_type_profile", {
  formCallBack: (profileData) => {
    console.log(profileData);
    userData.setUserInfo(profileData);
    profileFormMade.close();
  },
});

profileFormMade.setEventListeners();

profileEditButton.addEventListener("click", () => {
  profileFormMade.open();
  const { username, occupation } = userData.getUserInfo();
  jobInput.value = occupation;
  nameInput.value = username;
});

const popupWithImage = new PopupWithImage(".popup_type_image-overlay");
popupWithImage.setEventListeners();

function createCard(link, name) {
  const newCard = new Card(
    { link: link, name: name },
    "#template-card",
    popupWithImage.open
  );
  return newCard.generateCard();
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item.link, item.name);
      cardList.addItem(card);
    },
  },
  ".grid-net"
);

cardList.renderItems();

const cardFormMade = new PopupWithForm(".popup_type_create-card", {
  formCallBack: (newCardData) => {
    const card = createCard(newCardData.link, newCardData.name);
    cardList.addItem(card);
    cardFormMade.close();
  },
});
cardFormMade.setEventListeners();

profileButton.addEventListener("click", () => {
  cardFormMade.open();
  addCardForm.toggleStateButton();
});
