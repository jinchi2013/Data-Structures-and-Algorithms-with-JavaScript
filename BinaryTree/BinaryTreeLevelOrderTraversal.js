/**
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]


 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    var lev = 0;
    var result = [];
    
    var levelOrderTraverse = function(node, level) {
        if(node !== null) {
            if(!result[level]) {
                result[level]  = [];
            }
            result[level].push(node.val);
            ++level;
            
            if(node.left) levelOrderTraverse(node.left, level);
            if(node.right) levelOrderTraverse(node.right, level);
        }
    }
    
    levelOrderTraverse(root, lev);
    
    return result;
    
};