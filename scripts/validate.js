//document.overlay.exit realisation 

  //document.overlay.exit.event.keydown.esc
  // Showing error message
 /* const showInputError = function(formElement, inputElement, errorMessage, config){ 
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  }
  // Hiding error message 
  const hideInputError = function(formElement, inputElement, config) { 
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  }
  // Checking validity of each input set down below
  const checkInputValidity = function(formElement, inputElement, config) { 
    if(!inputElement.validity.valid){ 
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    }
    else { 
      hideInputError(formElement, inputElement, config);
    }
  };
  //Setting eventListeners to each input for validation check
  
  function setEventListeners(formElement, config){ 
    const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
    const buttonElement = formElement.querySelector(config.buttonElement);
    toggleStateButton(inputList, buttonElement, config);
    inputList.forEach( (inputElement) => 
    inputElement.addEventListener('input', function(){ 
      checkInputValidity(formElement, inputElement, config);
      toggleStateButton(inputList, buttonElement, config);
    }))
   
  }
  
  function enableValidation(config){ 
    const formList = Array.from(document.querySelectorAll(config.formElement));
    formList.forEach( (formElement) => {
   formElement.addEventListener('submit', (evt) => { 
    evt.preventDefault()
  });
    setEventListeners(formElement, config)
    })
  }  

  enableValidation(config)
  
  //StateButton for the future function the button is going to get the validate inputs and respond the proper way
  
  
//toggleButtonState function for the inputs setted up below^ the main idea is to close it after the card is attached to the grid net

  
function hasInValidInput(inputList){ 
  return inputList.some( (input => { 
    return !input.validity.valid
  }))
}



  function toggleStateButton(inputList, buttonElement, config){
    if (hasInValidInput(inputList)){ 
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', '')
    }
    else { 
      buttonElement.classList.remove(config.inactiveButtonClass)
      buttonElement.removeAttribute('disabled', '')
    }
  }
  */
  
  class FormValidator { 
    constructor(config, formElement){ 
  this._config = config; 
  this._formElement = formElement;
  this._formInputElements = Array.from(this._formElement.querySelectorAll(this._config.inputElement));
  this._formSubmitElement = this._formElement.querySelector(this._config.buttonElement);
    }

    enableValidation(){ 
     this._toggleStateButton();
      this._setEventListeners();
    }

    _setEventListeners(){ 
      this._formInputElements.forEach(item => {
        item.addEventListener('input', () => {
          this._checkInputValidity(item);
          this._toggleStateButton();
        });
      });
    };

    _checkInputValidity(inputElement){
      if(!inputElement.validity.valid){
        this._showInputError(inputElement)
       }
        else {
        this._hideInputError(inputElement)
       }
     }

     _showInputError(inputElement){
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._config.errorClass);
    }
    // Hiding error message 
    _hideInputError(inputElement){ 
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    }
  
  
  _toggleStateButton(){
    if(this._checkInputInvalidity()){ 
      this._formSubmitElement.classList.add(this._config.inactiveButtonClass);
      this._formSubmitElement.setAttribute('disabled', '');
    } else { 
      this._formSubmitElement.classList.remove(this._config.inactiveButtonClass);
      this._formSubmitElement.removeAttribute('disabled');
    }
  }

  _checkInputInvalidity(){ 
    return this._formInputElements.some(input => { 
      return !input.validity.valid;
    });
  }
}
  /*

      _ggg(){
this._formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Проверяем валидность формы и дезактивируем кнопку сабмита, если нужно
  this._checkValidityButton();

  // Добавляем обработчик изменения значений в инпутах
  this._formElement.addEventListener('input', function() {
    this._toggleStateButton();
  });
});
} 

_checkValidityButton(){ 
  this._toggleStateButton();
}
  }
*/ 