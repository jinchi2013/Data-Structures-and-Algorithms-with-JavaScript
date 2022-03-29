var inorderTraversal = function(root) {
  
  function recur (node) {
      if (node === null) {
          return []
      }
      
      return [
          ...recur(node.left),
          node.val,
          ...recur(node.right)
      ]
  }
  
  return recur(root)
}
