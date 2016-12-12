

'use strict'

var timeRed, timeYellow, timeGreen,
	lightRed 	= document.querySelector('.first'),
	lightYellow = document.getElementsByClassName('second'),
	lightGreen 	= document.getElementsByClassName('third'),
	button 		= document.getElementById('turnTrafficLight'),
	list;

	list = lightRed.classList;

	alert(list);

	lightYellow[0].classList;

	alert(list);

	
timeRed = document.getElementById('timeRed').value;

alert(timeRed);


function turnTrafficLight(){

	while(true) {

		var timeRed 	= document.getElementById('timeRed').value,
			timeYellow	= document.getElementById('timeYellow').value,
			timeGreen	= document.getElementById('timeGreen').value;

			timeRed 	= parseFloat(timeRed);
			timeYellow 	= parseFloat(timeYellow);
			timeGreen 	= parseFloat(timeGreen);

		var intervalRed = setInterval(function() {



				}, 1000
			);



		if() { break; };


	};

};




	button.onclick = function() {
		
		var time = 5;
		button.disabled = true;
		button.innerHTML = 'Разморозится через ' + time;

  		var interval_id = setInterval(function() {  /* запуск таймера */
    		time--;
    		if (time != 0) {
      			button.innerHTML = 'Разморозится через ' + time;
    		} else {
    			clearInterval(interval_id);  /* остановка таймера */
      			button.disabled = false;
      			button.innerHTML = 'Заморозить на 5 секунд';
    		}
  		}, 1000);
	};
	

