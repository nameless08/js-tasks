


// Заполнить массив заданным количеством городов. (Задается с клавиатуры). При вводе очередного названия города показывает, сколько раз нужно ввести город

'use strict'


function lec_3_Task_2() {

var n = prompt('Введите количество городов'),
	a = 0,
	arr = [];
	
	n = parseFloat(n);

	alert(n);
	alert(typeof(n));

while (a != n){

	var c = prompt('Введите название города');
	arr.push(c);

	a++;
};
	
	alert(arr);

};