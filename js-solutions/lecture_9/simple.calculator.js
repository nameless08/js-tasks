

// Сделать простой калькулятор, который будет считать выражения вида +(*,-,/),7,5,7,1 или 2+8-1/2*10+5 

'use strict'

function lec_9_Task_1() {

	performCalc();

	function performCalc(){

		var reg = /\d+|[\*\-\^\+\/]/g,
				str = prompt('Введите задание типа: +,7,5,6 либо 5 * 7 / 8 + 9 ^ 2'),
				arr = str.match(reg),
				totalValue = 0;

				if(arr.length > 1 && !isNumeric(arr[0])){

					var reg2 = /\d+/g,
						first = arr[0],
						arr = str.match(reg2);
		
					switch(first){
						
						case '+' : for(var i = 0; i < arr.length; i++){ 

							arr[i] = parseFloat(arr[i]);
							totalValue += arr[i];

						};

						break;

						case '*' : totalValue = 1; 

						for(var i = 0; i < arr.length; i++){ 

							arr[i] = parseFloat(arr[i]);
							totalValue *= arr[i];

						};

						break;

						case '-' : totalValue = arr[0];

						for(var i = 1; i < arr.length; i++){ 

							arr[i] = parseFloat(arr[i]);
							totalValue -= arr[i];

						};

						break;
						
						case '/' : totalValue = arr[0];

						for(var i = 1; i < arr.length; i++){ 

							arr[i] = parseFloat(arr[i]);
							totalValue /= arr[i];

						};

						break;
						
					};

					alert('Рассчетное значение ' + totalValue);

				} else if(arr.length > 1 && isNumeric(arr[0])) {

				do{

					operatorsPrior('^');
					console.log(arr);

					operatorsPrior('/');
					console.log(arr);

					alert(operatorsPrior('*'));
					console.log(arr);

					operatorsPrior('-');
					console.log(arr);
					
					operatorsPrior('+');
					console.log(arr);

					}while(arr.length > 1);

					alert('Рассчетное значение ' + arr);

				};

	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	};

	function operatorsPrior(oper) {

		var interValue = 0,
			a = 0;
		
			if(oper === '+'){

				for(var i = 0; i < arr.length; i++){

					if(arr[i] === '+') {

						interValue = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
						arr.splice(i-1,3,interValue);

					};
				};
			};

			if(oper === '-'){

				for(var i = 0; i < arr.length; i++){

					if(arr[i] === '-') {

						interValue = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
						arr.splice(i-1,3,interValue);

					};
				};
			};

			if(oper === '*'){

				for(var i = 0; i < arr.length; i++){

					if(arr[i] === '*') {
				
						interValue = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
						arr.splice(i-1,3,interValue);
					};
				};
			};

			if(oper === '/'){

				for(var i = 0; i < arr.length; i++){

					if(arr[i] === '/') {

						interValue = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
						arr.splice(i-1,3,interValue);
					
					};
				};
			};

			if(oper === '^'){

				for(var i = 0; i < arr.length; i++){

					if(arr[i] === '^') {

						interValue = Math.pow(parseFloat(arr[i - 1]), parseFloat(arr[i + 1]));
						arr.splice(i-1,3,interValue);

					};
				};
			};

			return arr;
		
		};


	};

};