/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 const revNums = (nums, start, end) => {
    for (let i = start; i <= end; i++) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}

var rotate = function(nums, k) {
    k = k % nums.length
    
    nums.reverse()
    
    revNums(nums, 0, k - 1)
    revNums(nums, k, nums.length - 1)
}