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

/**
 * @param {number} capacity
 */
function LinkListedNode(key, val) {
	this.key = key;
	this.val = val;
	this.next = this.prev = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.historyLen = 0;
    this.head = null;
    this.tail = null;
    this.prepend = function prepend(node) {
		if(!this.head) {
			// new node
			this.head = node;
			this.tail = node;
		} else {
			// prepend node
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
	};
	this.removeNode = function removeNode(node) {
		if(this.historyLen === 1) {
			this.head = null;
			this.tail = null;
		} else { // length >=2
			if(node.next && node.prev) { // remove at the middle
				node.prev.next = node.next;
				node.next.prev = node.prev;
			} else if(!node.prev && node.next) { //remove at the head
				this.head = node.next;
				this.head.prev = null;
			} else if(!node.next && node.prev) { // remove at the tail
				this.tail = node.prev;
				this.tail.next = null;
			}
		}

		node.next = null;
		node.prev = null;

		return node;
	};
	this.moveToHead = function moveToHead(node) {
		this.removeNode(node);
		this.prepend(node);
		
	};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if(this.map.hasOwnProperty(key.toString())){
		this.moveToHead(this.map[key]);
		return this.map[key].val;
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
	var newNode = new LinkListedNode(key, value)

	if(this.map.hasOwnProperty(key.toString())) {
		//Update
		this.removeNode(this.map[key])
		this.map[key] = newNode;
		this.prepend(newNode);
		console.log('updated:' +  this.map[key].val);
	} else if(this.historyLen === this.capacity) {
		// remove last and update

		var tailNode = this.removeNode(this.tail);
		delete this.map[tailNode.key];
		this.prepend(newNode);
		this.map[key] = newNode;
		console.log('removeAndInsert:' + this.map[key].val);
	} else {
		// insert/prepend the new node to the list
		this.map[key] = newNode;
		this.historyLen += 1;
		this.prepend(newNode);
		console.log( 'Added newNode:' + this.map[key].val);
	}
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
