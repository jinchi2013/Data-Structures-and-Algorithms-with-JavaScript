/*
	Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSumII = function(root, sum) {

	var result = [];

	var preOrderTraverse = function(node, arr) {
		if(node !== null) {
			var tmp = arr.slice(0).push(node.val);
			if(!node.left && !node.right) {
				var sumVal = tmp.reduce(function(sumAll, val){
					sumAll += val;
					return sumAll;
				}, 0);

				if(sumVal === sum){
					result.push(tmp);
				}
			} 

			if(node.left) preOrderTraverse(node.left, tmp);
			if(node.right) preOrderTraverse(node.right, tmp);
		}
	}

	preOrderTraverse(root, []);
	return result;
};