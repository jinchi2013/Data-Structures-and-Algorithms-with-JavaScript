/**
	Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

	Note:
	You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. 
	The number of elements initialized in nums1 and nums2 are m and n respectively.

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = n + m - 1;
    while(i>=0 && j>=0) { // the loop start from the end of the array
    					  // so the index of the num from the starter position will not change when add new element to the nums1 array
    	if(nums1[i] > nums2[j]){
    		nums1[k--] = nums1[i--];
    	} else {
    		nums1[k--] = nums2[j--];
    	}
    }

    while(j>=0) { // In this case, nums2 is not only longer than nums1 but also smaller than nums1
    			  // so just set the num in nums2 to the front position of nums1
    	nums1[k--] = nums2[j--];
    }
};