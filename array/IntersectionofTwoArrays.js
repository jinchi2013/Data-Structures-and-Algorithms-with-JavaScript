/**
	Given two arrays, write a function to compute their intersection.

	Example:
	Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

	Note:
	Each element in the result must be unique.
	The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 // First use two hashSet
var intersection = function(nums1, nums2) {
	var hashSet1 = createHastSet(nums1);
	var hashSet2 = createHastSet(nums2);
    
    function createHastSet (arr) {
    	return arr.reduce(function(set, num) {
			if(!set.hasOwnProperty(num.toString())){
				set[num] = num;
			}

			return set;
		}, {});
    }

    var result = [];

    Object.keys(hashSet1).forEach(function(key) {
    	if(hashSet2.hasOwnProperty(key)) {
    		result.push(parseInt(key));
    	}
    });

    return result;
};

// Second use two pointer
var intersection2 = function(nums1, nums2) {
	nums1.sort(sortFn);
	nums2.sort(sortFn);

	function sortFn(a, b) {return a - b}
	var i = 0;
	var j = 0;
	var hashSet = {};

	while(i < nums1.length && j < nums2.length) {
		if(nums1[i] < nums2[j]){
			++i;
		} else if(nums1[i] > nums2[j]) {
			++j;
		} else {
			if(!hashSet.hasOwnProperty(nums1[i].toString())){
				hashSet[nums1[i]] = nums1[i];
			}
			++i;
			++j;
		}
	}

	return Object.keys(hashSet).reduce(function(arr, key) {
		arr.push(parseInt(key));
		return arr;
	}, []);
}