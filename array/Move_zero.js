/*
	Given an array nums, 
	write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var record = nums.reduce(function(arr, num, index) {
        if(num === 0) {
            arr.push(index);    
        }
        return arr;
    }, []);
    
    for(var i = record.length-1; i>=0;i--) {
    	nums.splice(record[i], 1);
    	nums.push(0);
    }
};

var moveZeroes_quick = function(nums) {
	var count = 0;
	for(var i=0; i<nums.length; i++) {
		if(nums[i] !== 0) {
			nums[count] = nums[i];
			count++;
		}
	}
	for(count; count<nums.length; count++) {
		nums[count] = 0;
	}
}