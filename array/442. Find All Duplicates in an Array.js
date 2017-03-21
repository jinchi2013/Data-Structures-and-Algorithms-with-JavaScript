/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements that appear twice in this array.

 Could you do it without extra space and in O(n) runtime?

 Example:
 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [2,3]
 * */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var result = [];
    var obj = {};

    nums.forEach(function(num){
        if(obj.hasOwnProperty(num)) {
            obj[num]++;
        } else {
            obj[num] = 0;
        }
    });

    for(var prop in obj) {
        if(obj[prop] === 1){
            result.push(parseInt(prop));
        }
    }

    return result;

};

var findDuplicate_quicker = function(nums) {
    var length = nums.length;
    var result = [];

    for(var i = 0; i< length; i++) {
        var index = Math.abs(nums[i]) - 1;

        if(nums[index] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[index] = -nums[index];
        }

    }

    return result;
};
