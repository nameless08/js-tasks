

'use strict'

var t = document.getElementsByTagName('form')[0],
		t = document.getElementsByTagName('p')[0],
		t = document.getElementsByTagName('div')[0],
		colors = ['red','green','black','rosybrown','coral','darkorange','yellowgreen'],
		currentColor = 0;

	t.addEventListener('click',handler,false);
	t.addEventListener('click',handler,false);
	t.addEventListener('click',handler,false);

	function handler(e) {

		e.preventDefault() // браузер стоять
		this.style.backgroundColor = colors[currentColor];
		currentColor = currentColor + 1;

		if(currentColor == colors.length - 1){
			currentColor = 0;
		};

		e.stopPropagation() //событие не всплывать

		// console.log(this); alert(e.target+'---'+this);
		return false // Завершение
	};
