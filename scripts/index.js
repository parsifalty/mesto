
 profileEditButton.addEventListener('click', function(){
popupOpened(popup);
}); 

function popupOpened(element){
element.classList.add('popup_active');
}


function popupClosed(element){ 
  element.classList.remove('popup_active');
}

nameInput.value = userName.textContent;
jobInput.value = occupation.textContent; 

profileButton.addEventListener('click', function(){ popupOpened(cardCreate);});

popupCloseButton.forEach((button) => {
 button.addEventListener('click' , function (){ popupClosed(popup)
 popupClosed(cardCreate);
 popupClosed(popupImageHolder);
 })
});

function handlePopupProfileSubmit(evt) {
 evt.preventDefault();
 userName.textContent = nameInput.value;
 occupation.textContent = jobInput.value;
 popupClosed(popup);
}
popupProfileForm.addEventListener('submit', handlePopupProfileSubmit);

function createCard(link, name){
  const templateCard = document.querySelector('#template-card').content;
  const card = templateCard.querySelector('.grid-net__item').cloneNode(true);
  const cardImage = card.querySelector('.grid-net__item-image');
  cardImage.src = link;
  cardImage.alt = 'просторы'
  cardImage.addEventListener('click', function(){
  popupOpened(popupImageHolder);
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

profileButton.addEventListener('click', function(){ popupOpened(cardCreate);});

function addCard(){ 
  const newCard = createCard(cardCreateInputLink.value, cardCreateInputName.value);
  gridNet.prepend(newCard);
}

function handleCardformSubmit(evt) {
  evt.preventDefault();
  popupClosed(cardCreate);
  addCard();
  cardCreateInputName.value = '';
  cardCreateInputLink.value = '';
 }
cardCreateForm.addEventListener('submit', handleCardformSubmit);
