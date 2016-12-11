




'use strict'

		var user	= new user(),

		base 	= {
			massive: [],
			users: {
				
				noadmin : {
					pass : '321', 
				},

				oldAdmin : {
					pass : '456', 
				},
				
				admin : {
					pass : '123', 
				}
			}
		} 

		function user() {

	// регистрация
	this.addUser =   function() {

		var userLogin	= prompt('Введите Ваш логин', '');
		base.users[userLogin] 			= {};
		base.users[userLogin].name		= prompt('Введите Вашe имя', '');
		base.users[userLogin].pass 		= prompt('Введите Ваш пароль', '');
		base.users[userLogin].access 	= false;
	}

	// удаление ботов
	this.delUser =   function() {

		this.login = prompt('Введите логин!');
		this.pass = prompt('Введите пароль!');

		for(var key in base.users){

			console.log(key + ': ' + base.users[key].pass);

			var nameProp = key;

			alert(nameProp);

			if(nameProp == 'admin' && base.users[key].pass == this.pass) {

				alert('Так Вы админ!!!');

			};
			
		};

		// console.log(base.users.admin['pass']);
		}
	


	//Добавление в базу Админом
	this.addAdmin =   function() {
		if(a) {
			while(true) {
				var add = prompt('Что Вы хотите добавить в БД?', '');
				if (add) {
					base.massive.push(add);
				}else{
					break;
				}
			}
		} else { 
			alert('Извините, но Вы не администратор')
		}
		console.log(base.massive);
	}

	//Просмотр базы
	this.viewBase = function(){ console.log(base); }

	//Удаление из базы
	this.deleteAdmin = function() {
		if(a) {
			var del = 1;
			while(del) {
				del = prompt('Что Вы хотите удалить в БД?', '');
				for (var i = 0; i < base.massive.length; i++) {
					if(del === base.massive[i])
						base.massive.splice(i,1);
				}
			}
		} else { 
			alert('Извините, но Вы не администратор')
		}
	}
}
console.log(base);

































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



