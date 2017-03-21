/*
	Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var hold1 = -Infinity; // the money we have after first buy
    var hold2 = -Infinity; // the money we have after second buy
    var release1 = 0; // the money we have after first sell
    var release2 = 0; // the money we have after second sell
    
    prices.forEach(function(price){
        release2 = Math.max(release2, price+hold2);
        hold2 = Math.max(hold2, release1-price);
        release1 = Math.max(release1, price+hold1);
        hold1 = Math.max(hold1, -price);    
    });
    
    return Math.max(release2, release1);
};