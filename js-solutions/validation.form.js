

'use strict'

	// определяем основные переменные
	var tips = {

		name 	: '',
		phone	: 'Введите номер телефона.',
		email 	: 'Введите валидный адрес электронной почты, например mail@mail.ru.',
		pass 	: 'Пароль должен состоять из цифр, символов латинского алфавита и быть не менее 8 символов.',

	},

	formElLogin = false, 

	formEl = {

		login : false,
		phone : false,
		email : false,
		pass  : false,
		passAgain : false,
		userType :	false,

	},

	// имя 
	inputLogin = document.querySelector('#name'),	 		
	regLogin = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/,

	// телефон
	inputPhone = document.querySelector('#phone'),  		
	
	// почта
	inputEmail = document.querySelector('#email'),  
	regEmail = /.+@[a-z]+\.[a-z]{1,5}/g,

	// Пароль
	inputPass = document.querySelector('#password'),  

	// Повтор пароля
	inputPassAgain = document.querySelector('#password-again'),  


	// выбор типа пользователя
	selectType = document.querySelector('#usertype'),


	// кнопка отправить
	buttonSignUp  = document.querySelector('#btn'),
	
	// создаем контейнеры для подсказок
	toolTip = document.createElement('span');


// *** проверка логина
inputLogin.addEventListener('input', function(){flyValidation(inputLogin, regLogin, ' - это хорошее имя :) ', ' - это странное имя, попробуйте еще раз', formElLogin)}, false);
inputLogin.addEventListener('blur', function(){flyCompleted(inputLogin)}, false);

// *** проверка почты
inputEmail.addEventListener('input', function(){flyValidation(inputEmail, regEmail, ' - корректная почта :) ', ' - некорректная почта', formEl.email)}, false);
// inputEmail.addEventListener('blur', function(){flyCompleted(inputEmail)}, false);

// el - проверяемый элемент
// filter - регулярное выражение 
// cMsg - correct message сообщение о верном вводе
// wMsg - wrong message сообщение о не верном вводе
// condition - финальное состояние для валидации

function flyValidation(el, filter, cMsg, wMsg, condition) {

	var	value = el.value;

	alert(candit);

    el.classList.add('j-input_activ-no-valid');
    el.parentNode.appendChild(toolTip); // закладываем в родитель подсказку

    if(filter.test(value)){

       	el.classList.remove('j-input_activ-no-valid'); // убираем красную подсветку
		el.classList.add('j-input_activ-valid'); // добавляем зеленую подсветку

		toolTip.className = 'j-ttip j-ttip_help j-ttip_br';
		toolTip.innerHTML = value + ' ' + cMsg;

		condition = true;

    }else {

    	// если проверяемое поле не валидно
    	toolTip.innerHTML = tips.name + ' ' + value + ' ' + wMsg;
    	toolTip.className = 'j-ttip j-ttip_critic j-ttip_br';
		el.parentNode.appendChild(toolTip);

    };
};

function flyCompleted(el){
	el.parentNode.removeChild(toolTip);
};


// *** заключительная проверка

buttonSignUp.addEventListener('click', validationAll, false);

function validationAll(){

	if(formElLogin){
		
		document.querySelector('.j-data-login>span').innerHTML = inputLogin.value;

	}else{

		alert('Не прошла проверка!');

		if(formElLogin){
			showError(inputLogin.parentNode, 'Введите, пожалуйста, Ваше имя.');
		};
		
	};


	function showError(container, errorMsg){

	    var msgElem = document.createElement('div');

	    msgElem.className = "error-message";
	    msgElem.innerHTML = errorMsg;
	    container.appendChild(msgElem);

	};

	function resetError(container) {

      if (container.lastChild.className == "error-message") {

        	container.removeChild(container.lastChild);

      };
    };

};


















// // Функция, изменяющая содержание t2
// function modifyText(new_text) {
//   var t2 = document.getElementById("t2");
//   t2.firstChild.nodeValue = new_text;    
// }
 
// // Функция, добавляющая слушатель к таблице
// el = document.getElementById("outside");
// el.addEventListener("click", function(){modifyText("четыре")}, false);


// function validateLogin() {

//     var value = inputLogin.value;
    		
//     inputLogin.classList.add('j-input_activ-no-valid');

//     if(/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/.test(value)){

// 		parentLogin.appendChild(toolTip);
//     	inputLogin.classList.remove('j-input_activ-no-valid');
// 		inputLogin.classList.add('j-input_activ-valid');

// 		toolTip.className = 'j-ttip j-ttip_help j-ttip_br';
// 		toolTip.innerHTML = value + ' хорошее Имя Отчество :).';

// 		formEl.login = true;

//     }else {

//     	toolTip.innerHTML = tips.name + ' ' + value + ' странное имя, попробуйте что-нибудь другое.';
//     	toolTip.className = 'j-ttip j-ttip_critic j-ttip_br';
// 		parentLogin.appendChild(toolTip);

//     };

//   };

// function completedLogin(){
// 	parentLogin.removeChild(toolTip);
// };

// // *** проверка телефона
// inputPhone.addEventListener('input', validatePhone, false);
// inputPhone.addEventListener('blur', completedPhone, false);

// function validatePhone() {

//     	var value = inputPhone.value;
    		
//     	inputPhone.classList.add('j-input_activ-no-valid');

//     	if(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)){

//     		inputPhone.classList.remove('j-input_activ-no-valid');
// 			inputPhone.classList.add('j-input_activ-valid');

// 			toolTip.className = 'j-ttip j-ttip_help j-ttip_br';
// 			toolTip.innerHTML = value + ' корректный телефон.';

// 			formEl.phone = true;


//     	}else {

//     		toolTip.innerHTML = tips.name + ' ' + value + ' некорректный номер телефона.';
//     		toolTip.className = 'j-ttip j-ttip_critic j-ttip_br';
// 			parentPhone.appendChild(toolTip);

//     	};

//   	};

// function completedPhone() {
	
// 	var value = inputPhone.value;
// 	parentPhone.removeChild(toolTip);

// 	if(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)){
// 		inputPhone.style.color = 'green';
// 	}else{
// 		inputPhone.style.color = 'red';
// 	};

// };

// document.getElementById('mytext').setAttribute('disabled', 'disabled');

// // *** проверка почты
// inputEmail.addEventListener('input', validateEmail, false);
// inputEmail.addEventListener('blur', completedEmail, false);

// function validateEmail() {

//     	var value = inputEmail.value;
    		
//     	inputEmail.classList.add('j-input_activ-no-valid');

//     	if(/.+@.+\..+/i.test(value)){

//     		inputEmail.classList.remove('j-input_activ-no-valid');
// 			inputEmail.classList.add('j-input_activ-valid');

// 			toolTip.className = 'j-ttip j-ttip_help j-ttip_br';
// 			toolTip.innerHTML = value + ' корректный адрес.';

// 			formEl.email = true;

//     	}else {

//     		toolTip.innerHTML = tips.name + ' ' + value + ' некорректный.';
//     		toolTip.className = 'j-ttip j-ttip_critic j-ttip_br';
// 			parentEmail.appendChild(toolTip);

//     	};

//   	};

// function completedEmail() {
	
// 	parentEmail.removeChild(toolTip);

// };

// // *** проверка пароля
// inputPass.addEventListener('input', validatePass, false);
// inputPass.addEventListener('blur', completedPass, false);

// function validatePass() {

//     	var value = inputPass.value;
    		
//     	inputPass.classList.add('j-input_activ-no-valid');

//     	if(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,}/.test(value)){

//     		inputPass.classList.remove('j-input_activ-no-valid');
// 			inputPass.classList.add('j-input_activ-valid');

// 			toolTip.className = 'j-ttip j-ttip_help j-ttip_br';
// 			toolTip.innerHTML = 'Достаточно стойкий пароль.';

// 			formEl.pass = true;

//     	}else {

//     		toolTip.innerHTML = 'Слабый пароль. Добавьте цифры, символы, разный регистр.';
//     		toolTip.className = 'j-ttip j-ttip_critic j-ttip_br';
// 			parentPass.appendChild(toolTip);

//     	};

//   	};

// function completedPass() {
	
// 	parentPass.removeChild(toolTip);

// };

// // *** повтор пароля
// inputPassAgain.addEventListener('input', validatePassAgain, false);
// inputPassAgain.addEventListener('blur', completedPassAgain, false);

// function validatePassAgain() {

//     	var value = inputPassAgain.value,
//     	    value2 = inputPass.value;
    		
//     	inputPassAgain.classList.add('j-input_activ-no-valid');

//     	if(value === value2){

//     		inputPassAgain.classList.remove('j-input_activ-no-valid');
// 			inputPassAgain.classList.add('j-input_activ-valid');

// 			toolTip.className = 'j-ttip j-ttip_help j-ttip_br';
// 			toolTip.innerHTML = 'Пароли совпадают';

// 			formEl.passAgain = true;

//     	}else {

//     		toolTip.innerHTML = 'Пароли не совпадают';
//     		toolTip.className = 'j-ttip j-ttip_critic j-ttip_br';
// 			parentPassAgain.appendChild(toolTip);


//     	};

//   	};

// function completedPassAgain() {
	
// 	parentPassAgain.removeChild(toolTip);

// };


// // *** выбор типа пользователя
// selectType.addEventListener('change', selectUserType, false);
	
// function selectUserType(event){

// 		if(selectType[0].selected){

// 			console.log('Ничего не выбрано, необходимо выбрать');

// 		}else if(selectType[1].selected){

// 			console.log('Выбран Заказчик');
// 			document.querySelector('.j-form__el_specialty').style.display = 'none';
// 			document.querySelector('.j-form__el_customer-type').style.display = 'block';
		

// 		}else if(selectType[2].selected){

// 			console.log('Выбран Исполнитель');
// 			document.querySelector('.j-form__el_customer-type').style.display = 'none';
// 			document.querySelector('.j-form__el_specialty').style.display = 'block';
	

// 	};

// };

// // *** тотальная проверка
// buttonSignUp.addEventListener('click', validationAll, false);

// function validationAll(){

// 	if(formEl.login){

// 		alert('Вы ввели все верно!');

// 	}else{

// 		var formElements = document.querySelector('#registration-form').querySelectorAll('.j-form__el');

// 		if(!formEl.login){
// 			showError(parentLogin, 'Введите, пожалуйста, Ваше имя.');
// 		};
// 		if(!formEl.phone){
// 			showError(parentPhone, 'Введите, пожалуйста, Ваш номер телефона.');
// 		};
// 		if(!formEl.email){
// 			showError(parentEmail, 'Введите, пожалуйста, Ваш email.');
// 		};
// 		if(!formEl.pass){
// 			showError(parentLogin, 'Введите, пожалуйста, Ваше имя.');
// 		};
// 		if(!formEl.passAgain){
// 			showError(parentLogin, 'Введите, пожалуйста, Ваше имя.');
// 		};

// 	};


// 	function showError(container, errorMsg){

// 		// container.className = 'error';
// 	    var msgElem = document.createElement('div');
// 	    msgElem.className = "error-message";
// 	    msgElem.innerHTML = errorMsg;
// 	    container.appendChild(msgElem);

// 	};

// 	function resetError(container) {
//       if (container.lastChild.className == "error-message") {
//         container.removeChild(container.lastChild);
//       }
//     }

// };


// formEl.login 
// formEl.phone 
// formEl.email 
// formEl.pass  
// formEl.passAgain 
// formEl.userType 


// parentLogin
// parentPhone
// parentEmail
// parentPass
// parentPassAgain
// selectTypeParent


	// parentLogin = document.querySelector('.j-form__el_name'),
	// parentPhone = document.querySelector('.j-form__el_phone'),
	// parentEmail = document.querySelector('.j-form__el_email'),
	// parentPass = document.querySelector('.j-form__el_pass'),
	// parentPassAgain = document.querySelector('.j-form__el_pass-again'),
	// selectTypeParent = document.querySelector('.j-form__el_user-type'),




// проверка номера телефона: ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
// проверка email: /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/
// или так: /.+@.+\..+/i
// проверка на имя отчество /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/ 
// Регулярка для пароля: (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}

// (?=.*[0-9]) - строка содержит хотя бы одно число;
// (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
// (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
// (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
// [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.



    function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
    	
      var elems = form.elements;

      resetError(elems.from.parentNode);
      if (!elems.from.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
      }

      resetError(elems.password.parentNode);

      if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
      } else if (elems.password.value != elems.password2.value) {
        showError(elems.password.parentNode, ' Пароли не совпадают.');
      }

      resetError(elems.to.parentNode);
      if (!elems.to.value) {
        showError(elems.to.parentNode, ' Укажите, куда.');
      }

      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, ' Отсутствует текст.');
      }

    }


