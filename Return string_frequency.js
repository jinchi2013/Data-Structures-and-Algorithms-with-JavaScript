/*

	For example, you have a string like ABCAabcABa 
	we need you to return AAAaaaBBbbbcC
	"A" show at front means it shows most frequently in the string

*/

function map (string) {
	var array = string.split('');
	var map = {};
	var result = '';
	array.forEach(function(element){
		if(map.hasOwnProperty(element)){
			map[element] += element;
		} else {
			map[element] = element;
		}
	});

	Object.keys(map).forEach(function(e){
		result += map[e];
	}); 

	console.log(result);
}