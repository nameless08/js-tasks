
'use strict'



	'use strict'

		var user	= new user(),

		base 	= {
			data: [],
			users: {
				admin : { 
					name:'Валера',
					pass :'Ghfjhkdj8287482kvjkdjv',
					passComplexity: 300, 
				},
				sobaka: { 
					name:'Жучка',
					pass :'321',
					passComplexity: 100, 
				},
				prepod : {
					name:'Николай',
					pass :'gtgGGj',
					passComplexity: 200, 
				},
			}
		} 

	function user() {

	// регистрация
	this.addUser =   function() {

		var userLogin	= prompt('Введите Ваш логин', '');
		base.users[userLogin] 			= {};
		base.users[userLogin].name		= prompt('Введите Вашe имя', '');
		base.users[userLogin].pass 		= prompt('Введите Ваш пароль', '');

		if(/\d{1,}/g.test(base.users[userLogin].pass) && !(/[a-zA-Z]{1,}/g.test(base.users[userLogin].pass))) {

			console.log('Пароль первой степени');
			base.users[userLogin].passComplexity  = 100;

		}else if(/[a-zA-Z]{1,}/g.test(base.users[userLogin].pass) && !(/\d{1,}/g.test(base.users[userLogin].pass))){

			console.log('Пароль второй степени');
			base.users[userLogin].passComplexity  = 200;

		}else if(/[a-z]|[A-Z]|[a-z][A-Z]\d{1,}/g.test(base.users[userLogin].pass)){

			console.log('Пароль третей степени');
			base.users[userLogin].passComplexity  = 300;

		}else {

			alert('Недопустимый пароль!')

		};
	};

	this.hacking = function() {

		var max = 300,
			min = 50,
			levelHacker = Math.floor(Math.random()*(max - min + 1)) + min;

		alert('Внимание взлом! Уровень хакера ' + levelHacker);	

		for(var key in base.users){

			if(base.users[key].passComplexity < levelHacker){

				console.log(base.users[key].name);

			};

		};

	};

	// Авторизация
	this.entry =   function() {

		this.login = prompt('Введите логин!');
		this.pass = prompt('Введите пароль!');

		for(var key in base.users){
			if(key == this.login){
				console.log(key + ': ' + base.users[key].pass);
				if(base.users[key].pass === this.pass) {
					alert('Добро пожаловать '+ base.users[key].name);
				}
			}
		}	
	}

	//Добавление в базу Админом
	this.addAdmin =   function() {

		this.login = prompt('Введите логин!');
		this.pass = prompt('Введите пароль!');
		if (this.login == 'admin') {
			for(var key in base.users){
				if(key == this.login){
					console.log(key + ': ' + base.users[key].pass);
					if(base.users[key].pass === this.pass) {
						alert('Добро пожаловать '+ base.users[key].name);
						while(true) {
							var add = prompt('Что Вы хотите добавить в БД?', '');
							if (add) {
								base.data.push(add);
							}else{
								break;
							}
						}
					}
				}
			}
		}else {
			alert('Извините, но Вы не администратор');
		}
		console.log(base);
	}

	//Просмотр базы
	this.viewBase = function(){ console.log(base); }

	//Удаление из базы
	this.deleteAdmin = function() {
		this.login = prompt('Введите логин!');
		this.pass = prompt('Введите пароль!');
		if (this.login == 'admin') {
			for(var key in base.users){
				if(key == this.login){
					console.log(key + ': ' + base.users[key].pass);
					if(base.users[key].pass === this.pass) {
						alert('Добро пожаловать '+ base.users[key].name);
						while(true) {
							var del = prompt('Что Вы хотите удалить в БД?', '');
							if (del){
								for (var i = 0; i < base.data.length; i++) {
									if(del === base.data[i]){
										base.data.splice(i,1);
									}
								}
							}else{
								break;
							}
						}
					}
				}
			}
		}else {
			alert('Извините, но Вы не администратор');
		}
		console.log(base);
	}
}
console.log(base);





// 		var user	= new user(),

// 		base 	= {
// 			massive: [],
// 			users: {
				
// 				noadmin : {
// 					pass : '321', 
// 				},

// 				oldAdmin : {
// 					pass : '456', 
// 				},
				
// 				admin : {
// 					pass : '123', 
// 				}
// 			}
// 		} 

// 		function user() {

// 	// регистрация
// 	this.addUser =   function() {

// 		var userLogin	= prompt('Введите Ваш логин', '');
// 		base.users[userLogin] 			= {};
// 		base.users[userLogin].name		= prompt('Введите Вашe имя', '');
// 		base.users[userLogin].pass 		= prompt('Введите Ваш пароль', '');
// 		base.users[userLogin].access 	= false;
// 	}

// 	// удаление ботов
// 	this.delUser =   function() {

// 		this.login = prompt('Введите логин!');
// 		this.pass = prompt('Введите пароль!');

// 		for(var key in base.users){

// 			console.log(key + ': ' + base.users[key].pass);

// 			var nameProp = key;

// 			alert(nameProp);

// 			if(nameProp == 'admin' && base.users[key].pass == this.pass) {

// 				alert('Так Вы админ!!!');

// 			};
			
// 		};

// 		// console.log(base.users.admin['pass']);
// 		}
	


// 	//Добавление в базу Админом
// 	this.addAdmin =   function() {
// 		if(a) {
// 			while(true) {
// 				var add = prompt('Что Вы хотите добавить в БД?', '');
// 				if (add) {
// 					base.massive.push(add);
// 				}else{
// 					break;
// 				}
// 			}
// 		} else { 
// 			alert('Извините, но Вы не администратор')
// 		}
// 		console.log(base.massive);
// 	}

// 	//Просмотр базы
// 	this.viewBase = function(){ console.log(base); }

// 	//Удаление из базы
// 	this.deleteAdmin = function() {
// 		if(a) {
// 			var del = 1;
// 			while(del) {
// 				del = prompt('Что Вы хотите удалить в БД?', '');
// 				for (var i = 0; i < base.massive.length; i++) {
// 					if(del === base.massive[i])
// 						base.massive.splice(i,1);
// 				}
// 			}
// 		} else { 
// 			alert('Извините, но Вы не администратор')
// 		}
// 	}
// }
// console.log(base);

































// 'use strict'

// var user1	= new user(),
	
// 	base 	= {
// 		massive: [],
// 		users: {
// 			admin : {
// 				name 	: 'Валера',
// 				pass 	: '123',
// 				access 	: true 
// 			}
// 		}
// 	}; 

// function user() {
	
// 	// регистрация
// 	this.addUser =   function() {

// 		var userLogin	= prompt('Введите Ваш логин', '');

// 		base.users[userLogin] 			= {};
// 		base.users[userLogin].name		= prompt('Введите Вашe имя', '');
// 		base.users[userLogin].pass 		= prompt('Введите Ваш пароль', '');
// 		base.users[userLogin].access 	= false;
			
// 	};

// 	// удаление ботов
// 	this.delUser =   function() {

// 		this.login	= prompt('Введите Ваш логин: ', '');
// 		this.pass 	= prompt('Введите Ваш пароль: ', '');

// 		for(var key in base.users) {

// 			if(key === this.login ) {

// 				for(var key in base.users.admin.pass)

// 			}

// 		};

// 		// if(a) { 



// 		// };



// 		// var userLogin	= prompt('Введите Ваш логин', '');

// 		// base.users[userLogin] = {};
// 		// base.users[userLogin].pass = prompt('Введите Ваш пароль', '');

			
// 	};


// 	//Добавление в базу Админом
// 	this.addAdmin =   function() {
// 		if(a) {
// 			while(true) {
// 					var add = prompt('Что Вы хотите добавить в БД?', '');
// 					if (add) {
// 						base.massive.push(add);
// 					}else{
// 						break;
// 					}
// 			 };
// 		} else { 

// 			alert('Извините, но Вы не администратор')

// 		};
// 		console.log(base.massive);
// 	};

// 	//Просмотр базы Админом
// 	this.viewBase = function(){ console.log(base); };

// 	//Удаление из базы
// 	this.deleteAdmin = function() {
// 		if(a) {
// 			var del = 1;
// 			while(del) {
// 				del = prompt('Что Вы хотите удалить в БД?', '');
// 				for (var i = 0; i < base.massive.length; i++) {
// 					if(del === base.massive[i])
// 					base.massive.splice(i,1);
// 				}
// 			}
// 		} else { 

// 			alert('Извините, но Вы не администратор')

// 		};
// 	};
// };



