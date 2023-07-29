
import { popupImageHolder } from './constants.js'
 
class Card { 
    constructor(card, templateSelector, handleCardClick){
      this._title = card.name,
      this._image = card.link,
      this._templateSelector = templateSelector,
      this._handleCardClick = handleCardClick
      }
    
  
    _getTemplate() { 
  const cardElement = document 
  .querySelector(this._templateSelector)
  .content
  .querySelector('.grid-net__item')
  .cloneNode(true)
  
  return cardElement
    }
  
    _handleOpenPopup = () => { 
      this._handleCardClick({name: this._title, link: this._image});
    }
  
  _setEventListeners(){ 
    this._element = this._getTemplate()
    this._element.querySelector('.grid-net__item-image').addEventListener('click',this._handleOpenPopup)
  
    this._element.querySelector('.grid-net__item-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('grid-net__item-button_active')
    })
  
    const deleteButton = this._element.querySelector('.grid-net__item-button-delete');
    deleteButton.addEventListener('click', () => {
   this._element.remove()
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
    
    
  export { Card }
