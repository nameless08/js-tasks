

'use strict'


	function tank(name, armour, hp, speed, damage, bullets, fuel, maxfuel) { 
		
		this.name 		= name;
		this.armour 	= armour;
		this.hp 		= hp;
		this.speed 		= speed;
		this.damage 	= damage;
		this.bullets 	= bullets;
		this.fuel 		= fuel;
		this.maxfuel 	= maxfuel;

		this.fire = function() {

			this.bullets -= 1;
			return console.log(this.bullets);

		};

		this.go = function(time, diff) {

			this.fuel -= this.speed * time * diff;
			return console.log(this.fuel);

		};

		this.dofuel = function() {

			this.fuel = this.maxfuel;
			return console.log(this.fuel);

		}; 
	};


	var redtank = new tank("Т-90", 100, 100, 20, 10, 100, 100, 100);
	var greentank = new tank("Т-80", 100, 100, 20, 10, 100, 100, 100);