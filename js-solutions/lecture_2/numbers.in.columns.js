

'use strict'

function lec_2_Task_6() {

var a = prompt('Введите начальное, конечное значение и число колонок через запятую (например 3, 9, 3)'),
	b = 0,
	str ='',
	arr = [],
	range = [];

	arr = a.split(',');
	
	for(var z = 0; z < arr.length; z++){

		arr[z] = parseFloat(arr[z]);

	};

	for(var i = arr[0]; i <= arr[1]; i++) {

		range[b] = i;

		console.log(range[b]);

		b++;

	};
	
	for(var y = 0; y < range.length; y++) {

		

		if(y !== 0 && y % arr[2] == 0) {

			str = str +  '\n';

		};

		str = str + range[y] + '\t';

	};

	console.log(str);
	
};