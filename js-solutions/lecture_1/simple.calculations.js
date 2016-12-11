

// Даны два ненулевых числа. Найти их сумму, разность, произведение и частное. 

'use strict'

function lec_1_Task_1() {

var a = prompt('Введите первое число', ' '),
	b = prompt('Введите первое число', ' ');
	a = parseFloat(a);
  	b = parseFloat(b);
	
	simpleCalc(a,b);

	function simpleCalc(n1, n2) {

		if(isNumeric(n1) && isNumeric(n2) && !(1/a*b === Infinity)) {
			
			var results = {

				sum 	: n1 + n2,
				differ 	: n1 - n2,
				multi 	: n1 * n2,
				divis	: n1 / n2,

			};

			return alert('Сумма: ' + results.sum + ';' + '\n' + 'Разность: ' + results.differ + ';' + '\n' + 'Произведение: ' + results.multi + ';' + '\n' + 'Частное: ' + results.divis + '.' )
		
		} else {

			return alert("Извините, но одно из введенных Вами значений не является числом либо равно нулю! Попробуйте еще раз.")
	
		};

	};
	

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}; 

};	