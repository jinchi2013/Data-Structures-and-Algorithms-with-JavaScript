Function.prototype.applyCustom = function applyCustom(context) {
	context.fn = this;
	console.log(context.fn);
	context.fn();
	delete context.fn;
}

var obj1 = {
	name: 'cj',
	printName: function(){
		console.log(this.name)
	}
}

var obj2 = {
	name: 'cqf'
}

obj1.printName.applyCustom(obj2)

// Cause obj1.printName is a function, which will inheritance from Function object.
// the this in the prototype of the Function is the Function itself-- obj1.printName in this case