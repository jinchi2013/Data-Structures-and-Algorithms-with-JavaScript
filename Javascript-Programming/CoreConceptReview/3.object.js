// Ways to create an object
// constructor with the use of keyword new
// iteral var obj = {}
// Use Object.create
// factory

function objFactory() {
	var msg = 'hello';

	return {
		msg : msg
	}
}

// Inheritance by the prototype chain
var original = {
	valA: 10,
	valB: 20,
	position: {
		x:0,
		y:0
	}
}

var obj1 = Object.create(original);
var obj2 = Object.create(original);

obj1.valA = 111;
obj1.position.x = 124;

console.log(original.position.x)
console.log(obj1.valA, obj1.position.x)
console.log(obj2.valA, obj2.position.x)
