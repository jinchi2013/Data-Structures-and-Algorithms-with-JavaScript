function HashTable () {
    var table = [];

    // private method of hash table
    var loseloseHashCode = function(key) {
        var hash = 0;
        for(var i = 0; i < key.length ; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    };

    function put(key, value) {
        var position = loseloseHashCode(key);
        console.log(`${position}-${key}`);
        table[position] = value;
    }

    function get(key) {
        return table[loseloseHashCode(key)];
    }

    function remove(key) {
        table[loseloseHashCode(key)] = undefined;
    }

    return {
        get : get,
        put : put,
        remove : remove
    }
}

