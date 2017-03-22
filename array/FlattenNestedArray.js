/**
	for input [1,2,3,'we',[4,5,'rew',[3]], 3, 'eq'];
	
	output the sum of all numbers;
*/

function isNum(num) {
	return typeof num === 'number';
}

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
