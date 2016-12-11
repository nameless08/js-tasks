

// Даны два числа. Найти среднее арифметическое их квадратов и среднее арифметическое их модулей.(Math.pow Math.abs)

'use strict'

function lec_1_Task_2() {

var a = prompt('Введите первое число', ' '),
	b = prompt('Введите первое число', ' ');
	a = parseFloat(a);
  	b = parseFloat(b);

	arithmeticalMean(a,b);

	function arithmeticalMean(n1, n2) {

		if(isNumeric(n1) && isNumeric(n2) && !(1/a*b === Infinity)) {
			
			var results = {

				mediumDegree 	: (Math.pow(n1, 2) + Math.pow(n2, 2))/2,
				mediumModule  	: (Math.abs(n1) + Math.abs(n2))/2
	
			};

			return alert('Ср. ариф. квадратов: ' + results.mediumDegree + ';' + '\n' + 'Ср. ариф. модулей: ' + results.mediumModule + '.');
		
		} else {

			return alert("Извините, но одно из введенных Вами значений не является числом либо равно нулю! Попробуйте еще раз.")
	
		};

	};
	

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}; 

};	