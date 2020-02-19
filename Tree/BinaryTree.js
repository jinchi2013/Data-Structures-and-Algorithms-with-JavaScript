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

BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root)

  function traverseInOrderHelper (node) {
    if (!node) return

    traverseInOrderHelper(node.left)
    console.log(node.value)
    traverseInOrderHelper(node.right)
  }
}

BinaryTree.prototype.traverseInOrderIterative = function () {
  var cur = this._root
  var t = []
  var done = false

  while(!done) {
    if (cur !== null) {
      t.push(cur)
      cur = cur.left
    } else {
      if (t.length) {
        cur = t.pop()
        console.log(cur.value)
        cur = node.right
      } else {
        done = true
      }
    }
  }
}

BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root)
  function traversePostOrderHelper (node) {
    if (node.left) traversePostOrderHelper(node.left)
    if (node.right) traverseInOrderHelper(node.right)
    console.log(node.value)
  }
}

BinaryTree.prototype.traverseLevelOrder = function () {
  var temp = this._root
  var t = []
  t.push(temp)

  while (t.length) {
    var node = t.shift()
    console.log(node.value)

    if (node.left) t.push(node.left)
    if (node.right) t.push(node.right) 
  }
}

exports.BinaryTree = BinaryTree
