
'use strict'

function lec_2_Task_2() {

var myNum = prompt('Введите число', ''),
	number3, 
	number3Inv, 
	finalDecNumber;

myNum = Math.abs(parseFloat(myNum)); // преобразуем к числу и округляем

console.log(myNum); 

if(isNumeric(myNum)) { // проверяем на число
	
	console.log('Это число!');

	number3 = convNumbSystems(myNum,10); // преобразуем десятичное число в троичное (представлено в виде строки)
	console.log(number3); // выводим 

	number3Inv = invertion(number3); // производим инверсию троичного числа в виде строки
	console.log(number3Inv); // выводим

	finalDecNumber = convNumbSystems(number3,3); // преобразуем в 10-ое
	console.log(finalDecNumber); // выводим полученное 10ое число

	alert('Вы ввели число: ' + myNum + '; ' + '\n' + 'В троичной системе оно имеет вид: ' + number3 + '\n' + 'Если перевернуть это число и преобразовать обратно в 10ое, получим: ' + finalDecNumber + '.')

} else {

	alert('Извините, но Вы ввели что-то не то, попробуйте еще раз.');

}

// функции для конвертации систем счисления, инверсии строки и проверки на число

function convNumbSystems(n,r) {

	if(r == 3) {

		var amount = n.length - 1,
		 	digitSum = 0;

		console.log(n);
		console.log(amount);

		while(amount >= 0) {

			var digit = parseFloat(n[amount]);
			   

			console.log(digit);

			digitSum = digitSum + digit * Math.pow(3,amount);
			console.log(digitSum);

			amount--;

		}

		return digitSum;
		

	} else if(r == 10) {

		var z = "";

		while(n !== 0) {

			z = z + n % 3;

			console.log(z);

			n = n/3 - (n/3)%1;

			console.log(n);

		}

		return z = invertion(z);

	};


}; 

function invertion(str) {

	var amount = str.length - 1;

	console.log(amount);

	var inv = "";

	while(amount >= 0) {

		inv = inv + str[amount];
		amount--;

	};

	return inv;

};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


};