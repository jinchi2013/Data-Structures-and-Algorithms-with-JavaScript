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

function prepend(node, cache) {
	if(!cache.head) {
		// new node
		cache.head = newNode;
		cache.tail = newNode;
	} else {
		// prepend node
		newNode.next = cache.head;
		cache.head.prev = newNode;
		cache.head = newNode;
	}
}

function removeNode(node, cache) {
	if(cache.historyLen === 1) {
		cache.head = null;
		cache.tail = null;
	} else { // length >=2
		if(node.next && node.prev) { // remove at the middle
			node.prev.next = node.next;
			node.next.prev = node.prev;
		} else if(!node.prev && node.next) { //remove at the head
			cache.head = node.next;
			cache.head.prev = null;
		} else if(!node.next && node.prev) { // remove at the tail
			cache.tail = node.prev;
			cache.tail.next = null;
		}
	}
}

function moveToHead(node, cache) {
	prepend(node, cache);
	removeNode(node, cache);
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.historyLen = 0;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if(this.map.hasOwnProperty(key.toString())){
		moveToHead(this.map[key], this);
		return this.map[key].val;
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
		remove(this.map[key], this)
		this.map[key] = newNode;
		prepend(newNode);
	} else if(this.historyLen === this.capacity) {
		// remove last and update
		remove(this.tail, this);
		prepend(newNode, this);
	} else {
		// insert/prepend the new node to the list
		this.map[key] = newNode;
		this.length += 1;
		prepend(newNode, this);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
