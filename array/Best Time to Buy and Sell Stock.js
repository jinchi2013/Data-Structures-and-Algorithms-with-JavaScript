/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example
Given array [3,2,3,1,2], return 1.
*/

function solution(array) {
	var min = Infinite;
	var profit = -Infinite;

	for(var i=0; i<array.length; ++i) {
		if(array[i] < min) {
			min = array[i];
		}

		if(array[i] > min && ((array[i] - min) > profit) ) {
			profit = array[i] - min;
		}
	}

	if(isFinite(profit)){
		return profit;
	} else {
		return 0;
	}
}