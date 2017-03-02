/**

	Given an array of n positive integers and a positive integer s, 
	find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

	For example, given the array [2,3,1,2,4,3] and s = 7,
	the subarray [4,3] has the minimal length under the problem constraint.

	click to show more practice.

	More practice:
	If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
	if(nums.length === 0) {
		return 0;
	}

	var right = 0,
		left = 0,
		sum = 0,
		res = nums.length + 1; 
		// because the result could be the nums' length, so its starting value should be larger than length of the array
		// 15 [1,2,3,4,5] as a example
		
	while(right < nums.length) {
		while( sum < s && right < nums.length ) {
			sum += nums[right++];
		}

		while( sum >= s ) {
			res = Math.min(res, right - left);
			sum -= nums[left++];
		}
	}

	return res === nums.length + 1? 0 :res;
    
};