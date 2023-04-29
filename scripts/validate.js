//document.overlay.exit realisation 
popup.forEach( (popup) => { 
    popup.addEventListener('click', (evt) => { 
      if(evt.target === popup){ 
        closePopup(popup);
      }
    })
  })
  
  document.addEventListener('keydown', (evt) => { 
    if(evt.key === 'Escape'){ 
      popup.forEach( (popup) => { 
        closePopup(popup)
      })
    }
  })
  //document.overlay.exit.event.keydown.esc
  // Showing error message
  const showInputError = function(formElement, inputElement, errorMessage, config){ 
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
  const checkInputValidity = function(formElement, inputElement) { 
    if(!inputElement.validity.valid){ 
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    }
    else { 
      hideInputError(formElement, inputElement, config);
    }
  };
  //Setting eventListeners to each input for validation check
  
  function setEventListeners(formElement, config){ 
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit');
    stateButton(inputList, buttonElement, config);
    inputList.forEach( (inputElement) => 
    inputElement.addEventListener('input', function(){ 
      checkInputValidity(formElement, inputElement);
      stateButton(inputList, buttonElement, config);
    }))
   
  }
  
  function enableValidation(config){ 
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach( (formElement) => {
   formElement.addEventListener('submit', (evt) => { 
    evt.preventDefault()
  });
    setEventListeners(formElement, config)
    })
  }  

  enableValidation(config)
  
  //StateButton for the future function the button is going to get the validate inputs and respond the proper way
  
  function hasInValidInput(inputList){ 
    return inputList.some( (input => { 
      return !input.validity.valid
    }))
  }

  function checkFieldsFill (formElement, inputElement){ 
    if(inputElement.textContent === ''){
        return false
    }
    else { 
        return true
    }
  }
  
  function stateButton(inputList, buttonElement, config){
    if (hasInValidInput(inputList)){ 
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', '')
    }
    else { 
      buttonElement.classList.remove(config.inactiveButtonClass)
      buttonElement.removeAttribute('disabled', '')
    }
  }
  
  