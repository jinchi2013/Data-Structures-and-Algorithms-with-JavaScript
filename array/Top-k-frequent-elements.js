/**
	Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

	var table = nums.reduce(function(hashTable, num){
		if(hashTable.hasOwnProperty(num.toString())) {
			hashTable[num].count += 1;
		} else {
			hashTable[num] = {"val": num, "count": 1};
		}

		return hashTable;
	}, {});

	var array = Object.keys(table).reduce(function(array, key) {
		array.push(table[key]);

		return array;
	}, []);

	array.sort(function(a, b){
		return b.count - a.count;
	});

	var result = array.splice(0, k).reduce(function (res, obj){
		res.push(obj.val);
		return res;
	}, []);

	return result;
};