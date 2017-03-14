/*
	Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
	for(var i = 0; i < nums.length; i++) {
		if(nums[i] === 0) {
			nums[i] = -1;
		}
	}

	var map = {};
	map[0] = -1;

	var sum = 0;
	var max = 0;

	nums.forEach(function(num, i) {
		sum += num;
		if(map.hasOwnProperty(sum.toString())) {
			max = Math.max(max, i - map[sum]);
		} else {
			map[sum] = i;
		}
	});

	return max;
};