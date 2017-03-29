/**
	for input [1,2,3,'we',[4,5,'rew',[3]], 3, 'eq'];
	
	output the sum of all numbers;
*/

function isNum(num) {
	return typeof num === 'number';
}


/*
	The typeof object and array are both 'object'
	the fastest way is to use Array.isArray([1,2,3]) => true
	alternative way like Object.prototype.tostring([1,2,3]) => '[object Array]'
	                     Object.prototype.tostring({a:1}) => '[object Object]'
*/
function isArray(arr) {
	return typeof arr.length !== 'undefined' && !arr.hasOwnProperty('length');
}

function iteration(input) {
	var sum = 0;

	for(var i =0; i<input.length; i++) {
		if( isNum(input[i]) ) {
			sum += input[i];
		} else if(isArray(input[i])){
			sum += iteration(input[i]);
		}
	}

	return sum;
}
