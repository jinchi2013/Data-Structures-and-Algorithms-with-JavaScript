/**
	Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

	Example:

	Input:

	   1
	    \
	     3
	    /
	   2

	Output:
	1

	Explanation:
	The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
	Note: There are at least two nodes in this BST.

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
 * @return {number}
 */
var getMinimumDifference2 = function(root) {
	var array = [];
	var i = 0;
	var j = 1;
	var result = Infinity;

	function inOrderTraverse(node, cb) {
    	if(node !== null) {
    		inOrderTraverse(node.left, cb);
    		cb(node);
    		inOrderTraverse(node.right, cb);
    	}
    }

    function findMinimum(n) {
    	array.push(n.val);
    }

    inOrderTraverse(root, findMinimum);

    while(j < array.length) {
    	var tmp = Math.abs(array[i] - array[j]);
    	if(tmp < result) {
    		result = tmp;
    	}
    	++i;
    	++j;
    }

    return result;
}


var getMinimumDifference = function(root) {
    
    var array = [];
    var min = Infinity;
    var tmp1;
    
    function inOrderTraverse(node, cb) {
    	if(node !== null) {
    		inOrderTraverse(node.left, cb);
    		cb(node);
    		inOrderTraverse(node.right, cb);
    	}
    }

    function findMinimum(n) {
    	array.push(n.val);
    }

    inOrderTraverse(root, findMinimum);

    array.forEach(function(num) {
    	if( typeof tmp1 !== 'undefined' && (Math.abs(tmp1 - num) < min) ) {
    		min = Math.abs(tmp1 - num);
    	}

    	tmp1 = num;
    });

    // deal with last num in the array
    min = min > Math.abs(tmp1 - array[array.length -2]) ? Math.abs(tmp1 - array[array.length -2]) : min;

    return min;
};


