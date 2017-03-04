function BinarySearchTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}

	var root = null;

	this.insert = function(key) {
		var newNode = new Node(key);

		// special case - first Element
		if(root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	}

	var insertNode = function(node, newNode) {
		if(node.key > newNode.key) {
			if(node.left === null) {
				node.left = newNode
			} else {
				insertNode(node.left, newNode);
			}
		} 

		if(node.key < newNode.key) {
			if(node.right === null) {
				node.right === newNode
			} else {
				insertNode(node.right, newNode);
			}
		}
	}

	this.getRoot = function() {
		return root;
	}

	this.search = function(key) {
		return searchNode(root, key);
	}

	var searchNode = function(node, key) {
		if(node === null) {
			return false;
		}

		if(node.key > key) {
			return searchNode(node.left, key);
		} else if(node.key < key) {
			return searchNode(node.rigth, key);
		} else {
			return true;
		}
	}

	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	}

	var inOrderTraverseNode = function(node, cb) {
		if(node !== null) {
			inOrderTraverse(node.left, cb);
			cb(node);
			inOrderTraverse(node.right, cb);
		}
	}

	this.preOrderTraverse = function(cb) {
		preOrderTraverseNode(root, cb);
	}

	var preOrderTraverseNode = function(node, cb) {
		if(node !== null) {
			cb(node);
			preOrderTraverseNode(node.left, cb);
			preOrderTraverseNode(node.right, cb);
		}
	}

	this.postOrderTravers = function(cb) {
		postOrderTraversNode(root, cb);
	}

	var postOrderTraversNode = function(node, cb) {
		if(node !== null) {
			postOrderTraversNode(node.left, cb);
			postOrderTraversNode(node.right, cb);
			cb(node);
		}
	}

	this.min = function(root){
		return minNode(root);
	}

	var minNode = function(node) {
		if(node) {
			while(node & node.left !== null) {
				node = node.left;
			}

			return node.key;
		}

		throw 'Not a value Node';
	}

	this.max = function(root) {
		return maxNode(root);
	}

	var maxNode = function(node) {
		if(node) {
			while(node && node.right !== null) {
				node = node.right;
			}

			return node.key;
		}

		throw "Not a value Node";
	}

	this.remove = function(element) {
		root = removeNode(root, element);
	}

	var findMinNode = function(node) {
		while(node && node.left !== null) {
			node = node.left;
		}

		return node;
	}

	var removeNode = function(node, element) {
		if(node === null) {
			return null;
		}

		if(element < node.key) {
			node.left = removeNode(node.left, element);
			return node;
		} else if (element > node.key) {
			node.right = removeNode(node.right, element);
			return node;
		} else { // element is equal to node.key
			// handle 3 special conditions
			// case 1 - a leaf node (node child)
			// case 2 - a node with only 1 child
			// case 3 - a node with 2 children

			// case 1
			if(node.left === null && node.right === null) {
				node = null;
				return node;
			}

			//case 2
			if(node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			// case 3
			var aux = findMinNode(node.right);
			node.key = aux.key;
			node.right = removeNode(node.right, aux.key);
			return node;

		}
	}
}