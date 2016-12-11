

// Даны координаты (как целые от 1 до 8) двух различных полей шахматной доски. Если конь за один ход может перейти с одного поля на другое, вывести логическое значение True, в противном случае вывести значение False.


'use strict'

function lec_1_Task_4() {

var coor1 = prompt('Введите координаты первого поля (ФОРМАТ: "a1", где a - латинский символ) ', ''),
	coor2 = prompt('Введите координаты второго поля (ФОРМАТ: "g5", где g - латинский символ) ', ' '),
	firstField = {},
	secondField = {},
	initialA = coor1,
	initialB = coor2;

	firstField.x = coordTransform(coor1);
	firstField.y = +coor1.charAt(1);

	secondField.x = coordTransform(coor2);
	secondField.y = +coor2.charAt(1);

	if((Math.abs(secondField.x - firstField.x) == 1 && Math.abs(secondField.y - firstField.y) == 2) || (Math.abs(secondField.x - firstField.x) == 2 && Math.abs(secondField.y - firstField.y) == 1) ) {

		alert('Конь сможет за один ход перейти с поля ' + initialA + ' на поле ' + initialB);

	} else {

		alert('Конь не сможет за один ход перейти с поля ' + initialA + ' на поле ' + initialB); 

	};

	function coordTransform(c) {

		var crt;
		var z =  c.charAt(0);

		switch(z) {

			case 'a': 
				crt = 1;
				break;
			case 'b': 
				crt = 2;
				break;
			case 'c': 
				crt = 3;
				break;
			case 'd': 
				crt = 4;
				break;
			case 'e': 
				crt = 5;
				break;
			case 'f': 
				crt = 6;
				break;
			case 'g': 
				crt = 7;
				break;
			case 'h': 
				crt = 8;
				break;

		};

		return crt;

	};

};	
