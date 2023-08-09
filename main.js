(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleDeleteCard",(function(){u._handleCardDelete()})),n(this,"_handleOpenPopup",(function(){u._handleCardClick({name:u._title,link:u._link})})),this._title=e.name,this._link=e.link,this._likes=e.likes,this._templateSelector=r,this._handleCardClick=o,this._handleCardDelete=i}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".grid-net__item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._element=this._getTemplate(),this._image=this._element.querySelector(".grid-net__item-image"),this._image.addEventListener("click",this._handleOpenPopup),this._element.querySelector(".grid-net__item-button").addEventListener("click",(function(t){t.target.classList.toggle("grid-net__item-button_active")})),this._element.querySelector(".grid-net__item-button-delete").addEventListener("click",this._handleDeleteCard)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._image.src=this._link,this._element.querySelector(".grid-net__item-title").textContent=this._title,this._image.alt=this._title,this._element.querySelector(".grid-net__item-number").textContent=this._likes.length,this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n,this._formInputElements=Array.from(this._formElement.querySelectorAll(this._config.inputElement)),this._formSubmitElement=this._formElement.querySelector(this._config.buttonElement)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this.toggleStateButton(),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._formInputElements.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleStateButton()}))}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"toggleStateButton",value:function(){this._checkInputInvalidity()?(this._formSubmitElement.classList.add(this._config.inactiveButtonClass),this._formSubmitElement.setAttribute("disabled","")):(this._formSubmitElement.classList.remove(this._config.inactiveButtonClass),this._formSubmitElement.removeAttribute("disabled"))}},{key:"_checkInputInvalidity",value:function(){return this._formInputElements.some((function(t){return!t.validity.valid}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var y=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t={};return t.about=this._about.textContent,t.name=this._name.textContent,t}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),m=document.querySelector(".profile__info-button"),b=document.querySelector(".popup__input_type_username"),v=document.querySelector(".popup__input_type_occupation"),h=document.querySelector(".profile__button"),d={formElement:".popup__form",inputElement:".popup__input",buttonElement:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,S(r.key),r)}}function S(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var w=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=S(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()})),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return t.close()}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.formCallBack;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formCallBack=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;j(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formCallBack(t._getInputValues())}))}},{key:"close",value:function(){j(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}function B(t){var e=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===L(e)?e:String(e)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(r){var o=I(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}(this,t)});function i(t){var e,n,r,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=R(n=o.call(this,t)),c=function(t){q((e=R(n),I(i.prototype)),"open",e).call(e),n._popupDescription.textContent=t.name,console.log(t),n._popupImage.src=t.link,n._popupImage.alt=t.name},(u=B(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n._popupDescription=n._popup.querySelector(".popup__span"),n._popupImage=n._popup.querySelector(".popup__image"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(w);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}function G(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===D(e)?e:String(e)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(n);if(r){var o=U(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function i(t){var e,n,r,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=V(n=o.call(this,t)),c=function(t){z((e=V(n),U(i.prototype)),"open",e).call(e)},(u=G(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(w);fetch("https://mesto.nomoreparties.co/v1/cohort-72/cards",{method:"GET",headers:{authorization:"ee9de7f6-7aed-4e20-b5bf-f52e55007fe4"}}).then((function(t){return t.json()})).then((function(t){console.log(t);var e=new f({items:t,renderer:function(t){var n,r,i,u=(n=t.link,r=t.name,i=t.likes,new o({link:n,name:r,likes:i},"#template-card",F.open,K.open).generateCard());e.addItem(u)}},".grid-net");e.renderItems()})),new c(d,document.querySelector(".popup_type_profile")).enableValidation();var J=new c(d,document.querySelector(".popup_type_create-card"));J.enableValidation();var H=new y({nameSelector:".profile__info-fullname",aboutSelector:".profile__info-occupation"});fetch("https://mesto.nomoreparties.co/v1/cohort-72/users/me",{method:"GET",headers:{authorization:"ee9de7f6-7aed-4e20-b5bf-f52e55007fe4"}}).then((function(t){return t.json()})).then((function(t){console.log(t),H.setUserInfo(t)}));var M=new C(".popup_type_profile",{formCallBack:function(t){fetch("https://mesto.nomoreparties.co/v1/cohort-72/users/me",{method:"PATCH",headers:{authorization:"ee9de7f6-7aed-4e20-b5bf-f52e55007fe4","Content-Type":"application/json"},body:JSON.stringify({name:t.username,about:t.occupation})}).then((function(t){return t.json()})).then((function(t){H.setUserInfo(t)})),M.close()}});M.setEventListeners(),m.addEventListener("click",(function(){M.open(),fetch("https://nomoreparties.co/v1/cohort-72/users/me",{method:"GET",headers:{authorization:"ee9de7f6-7aed-4e20-b5bf-f52e55007fe4"}}).then((function(t){return t.json()})).then((function(t){v.value=t.about,b.value=t.name}))}));var F=new x(".popup_type_image-overlay");F.setEventListeners();var K=new N(".popup_type_delete-card");K.setEventListeners();var Q=new C(".popup_type_create-card",{formCallBack:function(t){fetch("https://mesto.nomoreparties.co/v1/cohort-72/cards",{method:"POST",headers:{authorization:"ee9de7f6-7aed-4e20-b5bf-f52e55007fe4","Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}),Q.close()}});Q.setEventListeners(),h.addEventListener("click",(function(){Q.open(),J.toggleStateButton()}))})();