
 profileEditButton.addEventListener('click', function(){
openPopup(popup);
}); 

function openPopup(element){
element.classList.add('popup_active');
}


function closePopup(element){ 
  element.classList.remove('popup_active');
}

nameInput.value = userName.textContent;
jobInput.value = occupation.textContent; 

profileButton.addEventListener('click', function(){ openPopup(cardCreate);});

popupCloseButton.forEach((button) => {
 button.addEventListener('click' , function (){ 
 closePopup(popup)
 closePopup(cardCreate);
 closePopup(popupImageHolder);
 })
});

function handlePopupProfileSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 closePopup(popup);
}
popupProfileForm.addEventListener('submit', handlePopupProfileSubmit);

function createCard(link, name){
  const templateCard = document.querySelector('#template-card').content;
  const card = templateCard.querySelector('.grid-net__item').cloneNode(true);
  const cardImage = card.querySelector('.grid-net__item-image');
  cardImage.src = link;
  cardImage.alt = 'просторы'
  cardImage.addEventListener('click', function(){
  openPopup(popupImageHolder);
  popupImage.setAttribute('src', link);
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

profileButton.addEventListener('click', function(){ openPopup(cardCreate);});

function addCard(){ 
  const newCard = createCard(cardCreateInputLink.value, cardCreateInputName.value);
  gridNet.prepend(newCard);
}

function handleCardformSubmit(evt) {
  evt.preventDefault();
  addCard();
  cardCreateInputName.value = '';
  cardCreateInputLink.value = '';
  closePopup(cardCreate);
 }
cardCreateForm.addEventListener('submit', handleCardformSubmit);
