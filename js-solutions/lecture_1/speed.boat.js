// Скорость лодки в стоячей воде V км/ч, скорость течения реки U км/ч (U < V). Время движения лодки по озеру T1 ч, а по реке (против течения) — T2 ч. Определить путь S, пройденный лодкой. 

'use strict'

function lec_1_Task_3() {

var a = prompt('Введите скорость лодки', ''),
	b = prompt('Введите скорость течения', ''),
	c = prompt('Введите время движения лодки', '');

	a = parseFloat(a);
  	b = parseFloat(b);
  	c = parseFloat(c);
	
	pathBoat(a,b,c);

	function pathBoat(n1, n2, n3) {

		if(isNumeric(n1) && isNumeric(n2) && !(1/a*b === Infinity)) {
			
			var results = {

				theFlow 		: (n1 + n2)*n3,
				againstFlow 	: (n1 - n2)*n3,
				standingWater 	: n1 * n3

			};

			return alert('Расстояние пройденое в стоячей воде: ' + results.standingWater  + ';' + '\n' + 'против течения: ' + results.againstFlow + ';' + '\n' + 'по течению: ' + results.theFlow + '.');
		
		} else {

			return alert("Извините, но одно из введенных Вами значений не является числом либо равно нулю! Попробуйте еще раз.")
	
		};

	};
	

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}; 

};	