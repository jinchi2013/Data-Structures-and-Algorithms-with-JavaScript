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
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.history = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if(this.map.hasOwnProperty(key.toString())){
		this.updateHistory(key);
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
	var keys = Object.keys(this.map);

     if(this.map.hasOwnProperty(key.toString())){
    	this.map[key].val = value;
    	this.updateHistory(key);
    } else if(this.capacity === keys.length) {
    	var leastRecentlyUsedKey = this.history[this.history.length - 1];

    	this.history.splice(this.history.indexOf(leastRecentlyUsedKey), 1);
    	delete this.map[leastRecentlyUsedKey];
    	this.map[key] = {val: value};
    	this.history.unshift(key);

    } else {
    	this.map[key] = {
    		val : value
    	}
    	this.history.unshift(key);
    }
};

LRUCache.prototype.updateHistory = function(key) {
	var indexOfKeyInHistory = this.history.indexOf(key);
	this.history.splice(indexOfKeyInHistory, 1);
	this.history.unshift(key);
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */