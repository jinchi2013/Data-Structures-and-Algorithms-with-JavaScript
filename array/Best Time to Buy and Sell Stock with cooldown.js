/*
	Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    var prev_buy,
    	buy = -Infinity,
    	prev_sell = 0;
    	sell = 0;

    prices.forEach(function(price){
    	prev_buy = buy;
    	buy = Math.max(prev_sell-price, prev_buy); // this use to figure out do we need to buy again, 
												   //compare profit with two days ago sell's value, which is prev_sell 
    	prev_sell = sell; // update the prev_sell value from two days before to sell's value(one day before);
    	sell = Math.max(prev_buy+price, prev_sell); // this use to figure out do we need to sell again
    });

    return sell;
};