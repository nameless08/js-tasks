
// Реализовать отображение остатка боеприпасов в пистолете, у которого в абойме N патронов + перезарядку. Абойма – массив из N ячеек. Выстрел реализовать через pop/shift Выстрел или перезарядка – prompt.(пустой)
// * Аналогично реализовать автомат c M патронами в обойме, который стреляет очередью по 3 патрона. Выстрелов не должно быть больше, чем патронов в обойме

'use strict'


function lec_3_Task_1() {

var n 	= prompt('какой объем обоимы?'),
	arr = [],
	x 	= '';

	n = parseInt(n);

	while (x==''){

		x = prompt('Нажми ОК!');

		if (arr.length == 0){

			// перезарядка
			for (var i = 0; i < n; i++){
				arr.push('патрон');
			}

			console.log('Перезаряженно. В обойме ' + arr.length + ' патронов');

			continue;

		};

		// выстрел
		if (arr.length != 0){
			arr.pop();
			arr.pop();
			arr.pop();
			console.log('Выстрел. Осталось ' + arr.length + ' патронов');
			continue;
		}


	};

};