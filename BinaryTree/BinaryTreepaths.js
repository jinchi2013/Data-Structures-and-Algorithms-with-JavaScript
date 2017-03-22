/**
	Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    
   	var pushPathToResult = function(path) {
      result.push(path.substring(0, path.length-2));
    }
    
    var preOrderTraverse = function(node, path, cb) {
      if(node !== null) {
        var tmpPath = path + node.val + '->';
        
        if(!node.left && !node.right) { // a leaf node has no right and left child node
          cb(tmpPath);
        }
        
        if(node.left) {
          preOrderTraverse(node.left, tmpPath, cb);
        }
        
        if(node.right) {
          preOrderTraverse(node.right, tmpPath, cb);    
        }
      }
    }
    
    preOrderTraverse(root, '', pushPathToResult);
    
    return result;    
};