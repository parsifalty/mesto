import Popup from './Popup.js'

export default class PopupWithForm extends Popup { 
    constructor(popupSelector, {formCallBack}){
        super(popupSelector),
        this._formCallBack = formCallBack,

        this._form = popupSelector.querySelector('.popup__form'),
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
    }

    _getInputValues(){
    const InputValues = {};

    this._inputList.forEach(input => { 
        InputValues[input.name] = input.value
    })
    console.log(InputValues)
return InputValues
    } 

    setEventListeners(){
        super._setEventListeners();
this._form.addEventListener('submit', (evt) => { 
    evt.preventDefault();
    this._formCallBack(this._getInputValues());
})
    }

    _close(){
        super.close()

        this._form.reset();
    }
}