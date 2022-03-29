var levelOrder = function(root) {
  var result = []
  function recur (node, level) {
      if (node !== null) {
          if (!result[level]) {
              result[level] = []
          }
          result[level].push(node.val)
          recur(node.left, level+1)
          recur(node.right, level+1)
      }
  }
  
  recur(root, 0)
  
  return result
}
