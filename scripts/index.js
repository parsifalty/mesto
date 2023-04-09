
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

profileCloseButton.addEventListener('click', function(){ 
popupClosed(popup);
});

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
