/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

 You may assume that each input would have exactly one solution and you may not use the same element twice.

 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2
 *
 * */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/**
 * sort the array !!!
 * greedy algorithm
 * is needed to resolve this problem
 *
 * use two pointer, start from both side of the array
 */
twoSum = function(numbers, target) {
    if(numbers===null || numbers.length < 1) {
        return null;
    }

    var i = 0;
    var j = numbers.length-1;

    while(i<j) {
        var x = numbers[i] + numbers[j];
        if(x < target) {
            ++i;
        } else if (x > target) {
            --j;
        } else {
            return [i+1, j+1];
        }
    }

    return null;
};