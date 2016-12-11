

// Написать Switch, который принимает на вход значение от 1 до 7 и отображает день недели. Если выбраны выходные (if) написать "Ура!"
// 1 – "Понедельник"
// 6 – "Ура! Суббота"


'use strict'


function lec_2_Task_4() {


var x = prompt('Введие число от 1 до 7', '');
	
	x = parseFloat(x);

	if(isNumeric(x)) {

		switch(x) {
  			
  			case 1:  alert('Понедельник! ;) Ура!');
  			break;
   
   			case 2:  alert('Вторник тоже хорош! ;) Ура!');
    		break;

    		case 3:  alert('И среду я люблю! ;) Ура!');
    		break;

    		case 4:  alert('Четверг - красавчик! ;) Ура!');
    		break;

    		case 5:  alert('Пятница - развратница! ;) Ура!');
    		break;

    		case 6:  alert('А суббота- беззабота!  ;) Ура!');
    		break;

    		case 7:  alert('Воскресенье - почти как день рождения! ;) Ура!');
    		break;

    		default: alert('Такого дня недели нет, но тоже - Ура!! :))');
 
		};


	};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


};