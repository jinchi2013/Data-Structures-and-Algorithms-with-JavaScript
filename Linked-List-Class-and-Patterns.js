// Node Class
function Node (element) {
	this.element = element;
	this.next = null;
}

// The Linked List Class
function LList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
    this.reverseLList = reverseLList;
}

function find(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);

	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currNode = this.head;

	while (!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevious(item) {
	var currNode = this.head;
	while ((currNode.next !== null) && (currNode.next.element !== item)) {
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item) {
	var prevNode = this.findPrevious(item);
	if (!(prevNode.next == null)) {
		prevNode.next = prevNode.next.next;
	}
}

// var linkedList = new LList();
// linkedList.insert('CJ', 'head');
// linkedList.insert('QQ', 'CJ');
// linkedList.insert('cqf', 'QQ');
// linkedList.display();

// Reverse a linked list

