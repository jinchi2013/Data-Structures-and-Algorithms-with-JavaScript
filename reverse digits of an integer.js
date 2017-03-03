/**

	Reverse digits of an integer. 

	Example1: x = 123, return 321 
	Example2: x = -123, return -321 

	Have you thought about this? 
	Here are some good questions to ask before coding. 
	Bonus points for you if you have already thought through this! 
If the integer's last digit is 0, what should the output be? 
ie, cases such as 10, 100. 
Did you notice that the reversed integer might overflow? 
Assume the input is a 32-bit integer, 
then the reverse of 1000000003 overflows.
How should you handle such cases? 
 Throw an exception? 
 Good, but what if throwing an exception is not an option? 
 You would then have to re-design the function (ie, add an extra parameter).

*/

function exception(msg) {
	this.msg = msg;
	this.name = 'integer Overflow';
}

var reverse = function(x){
	var isNegative = x < 0? true: false,
		divider = 10,
		result = 0,
		remain;

	if(isNegative) {
		x = x*(-1);
	}

	while(x !== 0) {
		remain = x%10;
		result = result*10 + remain;

		x = Math.floor(x/10);
	}

	if(result > Number.MAX_VALUE) {
		throw new exception('result overflow!!')
		// return 0;
	}

	return isNegative? result * (-1) : result;
}

try {
	reverse(123);
} catch (e) {
	console.log(e.name, e.msg);
}