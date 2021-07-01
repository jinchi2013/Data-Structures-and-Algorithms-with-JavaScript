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

var LRUCache = function(capacity) {
	this.capacity = capacity
	this.head = null
	this.tail = null
	this.map = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if (!this.map.has(key)) return -1

	const temp = this.map.get(key)
	this.moveToTail(temp)

	return temp.val

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	if (!this.map.has(key)) {
		const newNode = DLNode(key, value)
		if (this.map.size === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.map.set(key, newNode)
	} else {
		const temp = this.map.get(key)
		temp.val = value
		this.moveToTail(temp)
	}

	if (this.map.size > this.capacity) {
		this.removeHead()
	}
};

LRUCache.prototype.moveToTail = function (node) {
	if (node.next === null || this.map.size === 1) return

	if (node.prev === null) { // node is head
		this.head = node.next
		this.head.prev = null
	} else { // node is middle one
		const nodePrev = node.prev
		const nodeNext = node.next

		nodePrev.next = node.next
		nodeNext.prev = node.prev
	}

	node.next = null
	node.prev = this.tail
	this.tail.next = node
	this.tail = node
}

LRUCache.prototype.removeHead = function () {
	const temp = this.head
	this.head = temp.next
	this.head.prev = null

	temp.next = null
	this.map.delete(temp.key)
}

function DLNode (key, val) {
	return {
		key,
		val,
		next: null,
		prev: null
	}
}
