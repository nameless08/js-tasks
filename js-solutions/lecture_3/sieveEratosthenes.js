
function lec_3_Task_4() {

	'use strict'

	
		var n 		= prompt('Введите максимальное значение для вывода решета'),
			arr 	= [],
			sieve 	= [],
			j 		= 2;
		
		n = parseInt(n);	

		for (var i = 2; i < n; i++) {// заполнения массива булевыми значениями true

		  arr[i] = true;

		};

		console.log(arr);

		do {

		  for (i = 2 * j; i < n; i = i + j) { // 1

		    arr[i] = false;

		    console.log(arr[i]);

		  };

		  for (i = j + 1; i < n; i++) { // 2

		    if (arr[i]) break;

		  };

		  j = i; // 4

		} while (j * j < 100); // 3 

		// ******************* Пояснения по решению *******************
		// ************************************************************
		// Внешний цикл "3" проверяет условие выхода по условию - если квадрат текущего значения 
		// j больше максимального предела, то цикл прекращается и переходим к выводу решета

		// Цикл "1" вложенный в цикл "3" предназначен для поиска всех составных чисел заданного диапазона

		// Цикл "2" также вложенный в цикл "1" после прохождения цикла "1" (например когда весь массив до максимума 
		// будет проверен на предмет деления чисел без остатка на 2 - признак составных чисел) найдет следующее
		// простое число. 

		// Первое простое число присваивается j в начале программы, оно равно 2, это же число будет первым
		// в решете. Проверка на составные числа, которые деляться на 2 начинается соотвественно с 4 (в условии
		// цикла "1" записано i = 2 * j). Когда массив весь будет перебран и нужным элементам присвоено булевое 
		// значение false мы переходим к циклу "2". В нем происходит следующее i = j + 1, т.е. на данном этапе
		// j так и осталось равно 2 => мы входим в цикл со значением i = 3. А так как arr[3] = true сработает 
		// условие if и благодаря директиве break выкинет из цикла. При этом в точке "4" происходит переопределение
		// j, ему присваивается значение i, то есть j теперь равно 3. Далее будет произведена проверка внешнего цикла 
		// "3" j * j < 100 (3 * 3 < 100 == true) цикл продолжается. Теперь заход в цикл "1" начинается с i = 6 (т.к. 
		// i = 2 * j) 

		var z = 0;

		for(i = 0; i < n; i++){

			if(arr[i]) {

				sieve[z] = i;
				z++;

			};

		};

		console.log(sieve);

};
