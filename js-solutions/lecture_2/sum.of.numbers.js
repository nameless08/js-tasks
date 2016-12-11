

'use strict'

function lec_2_Task_3() {

var myNum = prompt('Введите целое неотрицательное число', '');
var num = parseFloat(myNum);
var sum = 0;

console.log(num);
console.log(isNumeric(num));

if(isNumeric(num)) {

	var i = 0;

	while(i <= num) {
		
		sum += i;
		i++;

		console.log(sum);
	}


} else {

	alert('Вы ввели не число!');

};

alert(sum);

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

};