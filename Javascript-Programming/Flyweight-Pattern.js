

var enemyPrototype = {
	name: 'Wolf',
	position: {
		x: 0,
		y: 0
	},
	setPosition: function setPosition(x, y) {
		this.position={
			x:x,
			y:y
		};
		return this;
	},
	health: 20,
	bite: function bite() {},
	evade: function evade() {}
},

spawnEnemy = function() {
	return Object.create(enemyPrototype)
};

/*
	If you change a subproperty of position of wolf1, wolf2,
	it mutates the enemyPrototype,
	but when you replace the whole position with a new object
	it overrides the property for that instance only
*/

var wolf1 = spawnEnemy();
var wolf2 = spawnEnemy();

wolf1.health = 5; // Primitive data type override automatically
console.log('wolf2.health', wolf2.health) // 20 Each returned object is a new instance

wolf1.position.x = 100; // this will change the value of enemyPrototype.position.x
console.log('wolf2.position.x',wolf2.position.x) // 100
// SO the following way can resolve this issue
wolf1.setPosition(10, 10)
console.log('wolf2.position.x', wolf2.position.x) // this is still 100
console.log('wolf1.position.x', wolf1.position.x) // this will be 10

wolf1.name = 'new name';
console.log('wolf2.name', wolf2.name);

