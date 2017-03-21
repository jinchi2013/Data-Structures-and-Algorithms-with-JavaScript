/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements of [1, n] inclusive that do not appear in this array.

 Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

 Example:

 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [5,6]
 * */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var length = nums.length;
    var result = [];

    for(var i=0; i<length; i++) {
        // -1 must be outside the Math.abs() method
        // or the index will be missing 1
        var index = Math.abs(nums[i]) - 1;

        if(nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    nums.forEach(function(num, index){
        if(num > 0) {
            result.push(index + 1);
        }
    });

    return result;
};
