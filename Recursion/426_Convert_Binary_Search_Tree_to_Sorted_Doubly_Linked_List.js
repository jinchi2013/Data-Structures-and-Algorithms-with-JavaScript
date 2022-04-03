var treeToDoublyList = function(root) {
  if (!root) return root
  var head = null
  var last = null

  function recur (node) {
    if (node !== null) {
      // DO inorder traversal on the tree
      recur(node.left)

      if (!head) {
        head = node
      }

      if (last) {
        last.right = node
        node.left = last
      }

      // Always move the last pointer to current handled node
      // So it could be used to link to upper level node(newly added of DLL)
      last = node
      // handle current node
      recur(node.right)
    }
  }

  recur(root)
  head.left = last
  last.right = head

  return head
}
