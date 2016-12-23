

'use strict'

var textArea = document.querySelector('#text'),
	inputName = document.querySelector('#name'),
	btnSend = document.querySelector('#btn'),
	commentsWrap = document.querySelector('#comment'),
	newText = '',
	newComment = null,
	debug = true,
	userName = '';

	btnSend.addEventListener('click', creatComment, false);

	function creatComment(){

		var commentsWrap = document.querySelector('#comments-wrap'),
			allComments = commentsWrap.querySelectorAll('.user-comment'),
			commentBox = document.createElement('div'),
			comment = document.createElement('p'),
			time = document.createElement('div'),
			delBtn = document.createElement('div'),
			user = document.createElement('div'),
			presentTime = createTime(new Date());

			userName = inputName.value;
			newText = textArea.value; 

			if(!(userName && newText)){
				return alert('Обя поля обязательны для заполнения!');
			};

			commentBox.className = 'user-comment';
			comment.className = 'text';
			time.className = 'time';
			delBtn.className = 'delete';
			delBtn.id = 'del';
			user.className = 'use-name';
			user.style.color = randomColor(1,10);

			user.innerHTML = userName;
			comment.innerHTML = newText;
			delBtn.innerHTML = '&#10006;';
			time.innerHTML = presentTime;

			commentBox.appendChild(user);
			commentBox.appendChild(delBtn);
			commentBox.appendChild(comment);
			commentBox.appendChild(time);
			
			
			if(allComments.length == 0){

				commentBox.id = 'c1';

			}else if(allComments.length > 0){

				commentBox.id = 'c' + (allComments.length + 1);

			};
			
			commentsWrap.appendChild(commentBox);

			textArea.value = '';
			inputName.value = '';

		if(debug){
			console.log(allComments);
			console.log(allComments.length);
			console.log(presentTime);
			console.log(userName);
			console.log(newText);
		};


		function randomColor(min, max) {
  			
  			var userColor = Math.floor(Math.random() * (max - min + 1)) + min;
  			switch(userColor) {

  				case 1: userColor = '#c0c704';
  				break;

  				case 2: userColor = '#044dc7';
  				break;

  				case 3: userColor = '#ea11b9';
  				break;

  				case 4: userColor = '#20b103';
  				break;

  				case 5: userColor = '#000000';
  				break;

  				case 6: userColor = '#942903';
  				break;

  				case 7: userColor = '#dd1919';
  				break;

  				case 8: userColor = '#6f6f6f';
  				break;

  				case 9: userColor = '#7653f8';
  				break;

  				case 10: userColor = '#ff6302';
  				break;

  			};

  			return userColor;

		};

		function createTime(t){

			var day = t.getDate(),
				month = t.getMonth() + 1,
				year = t.getFullYear(),
				hour = t.getHours(),
				minutes = t.getMinutes(),
				seconds = t.getSeconds();

			if(hour < 10){ hour = '0' + hour; };

			if(minutes < 10){ minutes = '0' + minutes; };

			if(seconds < 10){ seconds = '0' + seconds; };

			return day + '.' + month + '.' + year + ' ' +  	hour + ':' + minutes + ':' + seconds;

		};

	};


function live(eventType, elementId, cb) {
    document.addEventListener(eventType, function (event) {
        var el = event.target, found;
        while (el && !(found = el.id === elementId)) {
            el = el.parentElement;
        };
        if (found) {
            cb.call(el, event);
        };
    });
};

live("click", "del", function (event) {

    var currentObj = event.target;
	currentObj.parentNode.remove();

});




