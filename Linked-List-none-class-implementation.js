var list; // this would be a linked list

// find function will not change the list
// if the item exists in the list, the function will return the node
// if not, this function will return null;
function find(LinkedList, item) {
	var currNode = LinkedList;
	while (currNode.element != item && currNode !== null) {
		currNode = currNode.next;
	}
	return currNode;
}

// insert function will change the LinkedList parameter
function insert(LinkedList, newElement, item) {
	var newNode = {
		element: newElement,
		next: null
	};

	var currNode = find(LinkedList, item);
	// save currentnode next to the newnode next
	newNode.next = currNode.next;
	// connect currNode next with new Node
	currNode.next = newNode;

	// after this the global LinkedList will be changed.
}

// display function will show the element in the linked LinkedList one by one
function display(LinkedList) {
	var currNode = LinkedList;
	while(currNode.next !== null) {
		console.log(currNode.element);
		currNode = currNode.next;
	}
	console.log(currNode.element);
}

// findPrevious node
function findPrevious(LinkedList, item) {
	var currNode = LinkedList;
	while( currNode.next !== null && currNode.next.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
}

// remove function 
// this function will also change the global list variable 
function remove(LinkedList, item) {
	var prevNode = findPrevious(item);
	if(prevNode.next !== null) {
		prevNode.next = prevNode.next.next;
	}
}

// reverse function
function reverse(LinkedList) {
	var cur = LinkedList;
	var head = null;
	var next;

	while (cur) {
		next = cur.next;
		cur.next = head;

		if(next) {
			head = cur;
			cur = cur.next;
		} else {
			return cur;
		}
	}

	return null;
}

// linked list length function
function getLength(LinkedList) {
	var curNode = LinkedList;

	if(curNode === null) {
		return 1;
	}

	var count = 1;

	while(curNode.next !== null) {
		count++;
		curNode = curNode.next;
	}
	return count;
}
