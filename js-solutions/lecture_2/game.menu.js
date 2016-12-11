
// Написать меню игры, в котором принимаются команды: 'start' , 'options' и 'exit'. После ввода команды выполняется действие команды и ожидается следующая (кроме exit ).
// При 'start' выведите "начало", при 'options' => "опции", при 'exit' => "выход". При вводе других команд напишите – "команда не распознана"


'use strict'

function lec_2_Task_5() {


var x = prompt('Введите команду (start, options, exit)', '');

	switch(x) {
  			
  		case 'start':  alert('СТАРТ!');
  		break;
   
   		case 'options':  alert('Опции.');
    	break;

    	case 'exit':  alert('Выход.');
    	break;

    	default: alert('Команда не распознана.');
 
	};
	
};