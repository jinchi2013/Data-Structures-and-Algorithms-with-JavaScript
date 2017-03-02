/**
	Best Time to Buy and Sell Stock II
	Say you have an array for which the ith element is the price of a given stock on day i.

	Design an algorithm to find the maximum profit. 
	You may complete as many transactions as you like 
	(ie, buy one and sell one share of the stock multiple times). 
	However, you may not engage in multiple transactions at the same time 
	(ie, you must sell the stock before you buy again).

*/

/**

	First find the min value, then find the max value, 
	and finish one transaction
	then set max to -Infinity
	And find the next min value

**/

function solution(prices) {
	var min = Infinity;
	var max = -Infinity;
	var res = 0;

	for(var i = 0; i< prices.length; i++) {
		if(prices[i] < min && !isFinite(max)) {
			min = prices[i];
		} else if (prices[i] > max && isFinite(min)) {
			max = prices[i];
		} else if (prices[i] < max && isFinite(min)) {
			res += max - min;
			min = prices[i];
			max = -Infinity;
		}
	}

	if(max > min) {
		res += max - min;
	}

	return res;
}