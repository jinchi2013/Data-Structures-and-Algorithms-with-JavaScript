function BinaryTree (node) {
  this._root = node
}

BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root)

  function traversePreOrderHelper (node) {
    if (!node) reture
    console.log(node.value)
    traversePreOrderHelper(node.left)
    traversePreOrderHelper(node.right)
  }
}

BinaryTree.prototype.traversePreOrderIterative = function () {
  var nodeStack = []
  nodeStack.push(this._root)

  while(nodeStack.length) {
    var node = nodeStack.pop()
    console.log(node.value)

    if (node.right) nodeStack.push(node.right)
    if (node.left) nodeStack.push(node.left)
  }
}

exports.BinaryTree = BinaryTree
