

'use strict'

	var flashlight = {

		red 		: document.querySelector('.first'),
		yellow		: document.querySelector('.second'),
		green 		: document.querySelector('.third'),
		button 		: document.querySelector('#turnTrafficLight'),

	},
	i = 0,
	duration = { };



	function turnTrafficLight(){

			duration.red 	= 1000 * parseFloat(document.getElementById('timeRed').value);
			duration.yellow = 1000 * parseFloat(document.getElementById('timeYellow').value);
			duration.green 	= 1000 * parseFloat(document.getElementById('timeGreen').value);

			alert(duration.yellow);

			for(var i = 0; i < 4; i++){

				setTimeout(function() {

	  				flashlight.red.classList.add('red-light');

				}, 1);

				setTimeout(function() {

	  				flashlight.yellow.classList.add('yellow-light');
	  				flashlight.red.classList.remove('red-light');


				}, duration.red);

				setTimeout(function() {

	  				flashlight.green.classList.add('green-light');
	  				flashlight.yellow.classList.remove('yellow-light');


				},duration.red + duration.yellow);

			};

};




// var intervalRed = setInterval(function() {
				
						
// 						timeRed--;
			    		
// 			    		if (timeRed != 0) {

// 			    			if(!lightRed.classList.contains('red-light')){

// 			    				lightRed.classList.add('red-light');

// 			    			};

// 			    		} else {

// 			    			clearInterval(intervalRed);  // остановка таймера
// 			    			lightRed.classList.remove('red-light');
			      		
// 			    		};

// 					}, 1000
// 				);
	

// 			var timeYellow = setInterval(function() {
						
// 						timeYellow--;
			    		
// 			    		if (timeYellow != 0) {

// 			    			if(!lightYellow.classList.contains('yellow-light')){

// 			    				lightYellow.classList.add('yellow-light');

// 			    			};

// 			    		} else {

// 			    			clearInterval(timeYellow);  // остановка таймера
// 			    			lightYellow.classList.remove('yellow-light');
			      		
// 			    		};

// 					}, 1000
// 				);
	

// 			var timeGreen = setInterval(function() {
						
// 						timeGreen--;
			    		
// 			    		if (timeGreen != 0) {

// 			    			if(!lightGreen.classList.contains('green-light')){

// 			    				lightGreen.classList.add('green-light');

// 			    			};

// 			    		} else {

// 			    			clearInterval(timeGreen);  // остановка таймера
// 			    			lightGreen.classList.remove('green-light');
			      		
// 			    		};

// 					}, 1000
// 				);
	
		




// 	button.onclick = function() {
		
// 		var time = 5;
// 		button.disabled = true;
// 		button.innerHTML = 'Разморозится через ' + time;

//   		var interval_id = setInterval(function() {  /* запуск таймера */
//     		time--;
//     		if (time != 0) {
//       			button.innerHTML = 'Разморозится через ' + time;
//     		} else {
//     			clearInterval(interval_id);  /* остановка таймера */
//       			button.disabled = false;
//       			button.innerHTML = 'Заморозить на 5 секунд';
//     		}
//   		}, 1000);
// 	};
	

