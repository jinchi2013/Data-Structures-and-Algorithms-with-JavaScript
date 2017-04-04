var arr = [1,7,9,10,13,15,17];

function isSumOfTwoExistInArray (arr) {
	var len = arr.length;
	
	if(len <= 2) {
		return false;
	}

	var j = len - 2;
	var sumMap = {};

	arr.sort(function(a, b){return a - b;});

	while(j > 0) {
		var i = 0;
		var sum = arr[i] + arr[j];
		sumMap[arr[j+1]] = arr[j+1];

		while(sum < arr[j+1] && i<j) {
			sum = arr[i] + arr[j];

			if(sumMap.hasOwnProperty(sum.toString())) {
				return true;
			}

			++i;
		}

		--j;
	}

	return false;
}