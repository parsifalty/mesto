import Popup from './Popup.js'

export default class PopupWithImage extends Popup { 
    constructor(popupSelector){ 
    super(popupSelector);

    this._popupDescription = popupSelector.querySelector('.popup__span'),
    this._popupImage = popupSelector.querySelector('.popup__image')

    }

    open = (card) => {
        super.open(),
//Именование открытой картинки 
        this._popupDescription.textContent = card.name
//Ссылка на картинку 
        this._popupImage.src = card.link
//Надпись для прочтения или для показа во время ошибки загрузки изображения
        this._popupImage.alt = card.name
        console.log(card)

    }
}