/*
	Design and implement a data structure for Least Recently Used (LRU) cache. 
	It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. 
When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity *//* );*/
/*
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

var DoublyLinkList = function() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	}

	var head = null;
	var tail = null;

	this.prepend = function(element) {
		var node = new Node(element);

		if(!head) {
			head = node;
			tail = node;
		} else {
			node.next = head;
			head.prev = node;
			head = node;
		}
	}

	this.remove = function(element) {
		var current = head;
		var previous;
		if(!current) {
			return false;
		}

		if(current.element === element) {
			return false;
		}

		while(current && current.element !== element) {
			previous = current;
			current = current.next;
		}

		if(current.next === null) {
			previous.next = null;
			tail = previous;
			return true;
		}

		// in the middle of list
		previous.next = current.next;
		current.next.prev = previous;

		return true;
	}

	this.moveToHead = function(element) {
		if(this.remove(element)){
			this.prepend(element);
		}
	}

	this.removeTail = function() {
		var current = tail;

		if(current.prev === null) {
			tail = null;
			head = null;
			return current.element; // only one node in the list (capacity=1)
		}

		var previous = current.prev;

		previous.next = null;
		tail = previous;

		return current.element;
	}

	this.getHead = function() {
		return head;
	}

	this.getTail = function() {
		return tail;
	}
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.history = new DoublyLinkList();
    this.historyLen = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if(this.map.hasOwnProperty(key.toString())){
		this.history.moveToHead(key);
		return this.map[key];
	} else {
		return -1;
	}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if(this.map.hasOwnProperty(key.toString())){
    	this.history.moveToHead(key);
    	this.map[key] = value;
    } else if(this.capacity === this.historyLen) {
		var tailElement = this.history.removeTail();
		delete this.map[tailElement];
		this.map[key] = value;
		this.history.prepend(key);
    } else {
    	this.history.prepend(key);
    	this.map[key] = value;
    	this.historyLen++;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */