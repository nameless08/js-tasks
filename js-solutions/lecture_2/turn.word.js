

'use strict'

function lec_2_Task_1() {

var str = prompt('Введите что-нибудь', '');
var amount = str.length - 1;
var inversion = "";

console.log(amount);

while(amount >= 0) {

	inversion = inversion + str[amount];
	amount--;

};

alert(inversion);


};