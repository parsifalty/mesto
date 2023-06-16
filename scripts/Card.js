 import { openPopup } from '../scripts/index.js'
import { popupImage, popupSpan, popupImageHolder } from './constants.js'
 
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
      this.element = deleteButton.closest('.grid-net__item');
    
      this.element.remove();
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
