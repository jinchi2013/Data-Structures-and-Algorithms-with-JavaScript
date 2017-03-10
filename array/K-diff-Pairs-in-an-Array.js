/**
	Given an array of integers and an integer k, 
	you need to find the number of unique k-diff pairs in the array. 
	Here a k-diff pair is defined as an integer pair (i, j), 
	where i and j are both numbers in the array and their absolute difference is k.

	Example 1:
	Input: [3, 1, 4, 1, 5], k = 2
	Output: 2
	Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
	Although we have two 1s in the input, we should only return the number of unique pairs.
	Example 2:
	Input:[1, 2, 3, 4, 5], k = 1
	Output: 4
	Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
	Example 3:
	Input: [1, 3, 1, 5, 4], k = 0
	Output: 1
	Explanation: There is one 0-diff pair in the array, (1, 1).
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {

	var count = 0;

	if(k < 0) {
		return count;
	}

	var hashTable = nums.reduce(function(table, num){
		if(table.hasOwnProperty(num.toString())) {
			table[num] += 1;
		} else {
			table[num] = 1;
		}

		return table;
	}, {});

	Object.keys(hashTable).forEach(function(key) {
		if(k === 0) {
			if(hashTable[key] >= 2) {
				++count;
			}
		} else {
			var sum = parseInt(key) + k;
			if(hashTable.hasOwnProperty(sum.toString())){
				++count;
			}
		}
	});

	return count;
};
