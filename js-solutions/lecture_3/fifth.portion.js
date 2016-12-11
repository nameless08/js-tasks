

// Составить таблицу значений функции y = 5 – x*x/2 на отрезке [-5; 5] с шагом 0.5
// Факториал числа представляет собой произведение всех натуральных чисел от 1 до этого числа... По введенному числу найти его факториал
// Заполнить массив выбранного размера числами фибоначчи Fn=F(n-1)+F(n-2); //F1=1;F2=1
// Найти максимальный и минимальный элемент массива и показать его индекс.
// Массив заполнить случайными целыми числами Math.floor(Math.random()*(max - min + 1)) + min;

'use strict'

function lec_3_Task_5() {

	var choiceSubtasks = prompt('Введите цифру, чтобы выбрать подзадачу: \n 1 - Таблица значений функции; \n 2 - Факториал; \n 3 - Массив чисел Фибоначчи; \n 4 - Максимальный и минимальный элемент массива; \n 5 - Заполнение массива случайными целыми числами. ');


	switch(choiceSubtasks) {

		case "1": valueTable();
		break;

		case "2": factorial();
		break;

		case "3": numbersFibonacci();
		break;

		case "4": minMax();
		break;

		case "5": arrRandomNum();
		break;

		default: alert('Что-то вы не то ввели...');

	};



	function factorial(){

		var num = prompt('Введите целое число, только число и целое это ВАЖНО.'),
			x = 1;

		num = parseFloat(num);

		if(!isNumeric(num)) {

			while(!isNumeric(num)) {

				alert('Извините, но это наглость, это вообще не число! Мы вас зациклим!');

				num = prompt('Введите целое число, ТОЛЬКО ЧИСЛО и ТОЛЬКО ЦЕЛОЕ! Это ВАЖНО.');
				num = parseFloat(num);

				if(!isNumeric(num)) {
					
					alert('Да вы неугомонны! Наказание в виде 10 алертов!');

					for(var i = 1; i <= 10; i++){
						alert('ALERT № ' + i + '!' );
					};

				};

			};

			alert('Отлично! Вы молодец ;)')

		} else if(num !== ~~num){

			alert('Мы же вас предупреждели - ЦЕЛОЕ число! Ладно, прощаем, и округлим за вас..');
			num = ~~num;
			alert('Вуаля, ваше число ' + num + '. А если бы ввели сразу целое не было бы столько alert`ов!');
			
			for(var i = 1; i <= num; i++){
			
				x *= i; 

			};
			
		};

		for(var i = 1; i <= num; i++){
		
			x *= i; 

		};

		alert('Итак, факториал числа ' + num + ' равен ' + x + '.')


	};

	function numbersFibonacci(){

		var num = prompt('Введите целое число.'),
			arr = [ 0, 1 ],
			x = 2;

		num = parseFloat(num);

		if(!isNumeric(num)) {

			alert('Извините, но вы ввели не число, попробуйте еще раз');
			num = prompt('Введите целое число.');
			num = parseFloat(num);

			if(!isNumeric(num)){

				alert('Увы, но снова нет. Досвидания!');

			} else if(num !== ~~num){
				
				var tempNum = num;
				num = ~~num;
				alert('Отлично, вы молодец! Правда вы ввели не целое число - ' + tempNum + ', но мы отбросили дробную часть - ' + num);

			} else{

				alert('Шикарно! И число, и сразу целое! :))');

			};

		} else if(num !== ~~num){

			num = ~~num;
			alert('Вы ввели не целое число и нам пришлось его округлить, ваше число ' + num);
						
		};

		arr[0] = 1;
		arr[1] = 1;

		for(var i = 2; i <= num; i++){
		
			arr[i] = arr[i-1] + arr[i-2];
		

		};

		console.log(arr.slice(0,num));
		alert('Массив чисел Фибоначчи от 1 до ' + num + ' выведен в консоль');

	};


	function minMax(){

		var q = prompt('Введите количество элементов массива'),
			num, max, min, a, b, 
			arr = [];

			q = parseFloat(q);
			alert(isNumeric(q));


			if(!isNumeric(q)){

				alert('Вы ввели некорректное число элементов массива.')

			} else {

				for(var i = 0; i < q; i++){
					
					num = prompt('Введите число');
					
					num = parseFloat(num);

					if(!isNumeric(num)) {

						alert('Массив надо заполнять только числами!');

						while(!isNumeric(num)){

							num = prompt('Введите именно число');
							num = parseFloat(num);

						};

					}; 

					arr[i] = num;

				};

				alert(arr);
			};

				min = arr[0];
				max = arr[0];
				a = 0;
				b = 0;

			for(i = 1; i < q; i++){

				if(min > arr[i]){
					min = arr[i];
					a = i;
				};

				if(max < arr[i]){
					max = arr[i];
					b = i;
				};

			};

			alert('Минимальное значение массива находится в ячейке массива №' + a + ' =' + min + ', a максимальное в ячейку №' + b + ' =' + max);
	
	};

	function arrRandomNum(){

		var q = prompt('Введите количество элементов массива'), 
			max = 100, min = 1,
		    arr = [];

			q = parseFloat(q);

			if(!isNumeric(q)){

				alert('Вы ввели некорректное число элементов массива.')

			} else {

				for(var i = 0; i < q; i++){
					
					arr[i] = Math.floor(Math.random()*(max - min + 1)) + min;				
					
			};

			console.log(arr);
		
		};
	};


	function valueTable() {
		var y, x, str = "", a = 0;

		for( var x = -5; x <= 5; x+= 0.5 ) {

			a++;

			y = (x*x)/2;
			if(a%5 === 0) {
				str = str + '\t' + '\n';
			};

			str = str + '\t\t' + y;

		};

		console.log(str)

		alert('Таблица значений функции y = (x*x)/2 на отрезке [-5; 5] выведена в консоли');
	};

	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	};



};