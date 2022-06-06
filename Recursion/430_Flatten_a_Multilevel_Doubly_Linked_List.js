/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var flatten_single_recurrsion = function(head) {
    var ptr = head

    function flattenChild(ptr, next) {
        var child = ptr.child
        ptr.child = null
        ptr.next = child
        child.prev = ptr
        ptr = child
        
        while (ptr) {
            if (ptr.child) {
                flattenChild(ptr, ptr.next)
            }
            if (!ptr.next) {
                break
            }
            ptr = ptr.next
        }
        
        if (next) {
            ptr.next = next
            next.prev = ptr   
        }
    }
    
    while (ptr) {
        if (ptr.child) {
            flattenChild(ptr, ptr.next)
        }
        ptr = ptr.next
    }
    
    return head
};


// Each recurrsion seperate the list into two part, child and next
var flatten = function(head) {
    if (head === null) {
        return head
    }
    
    let ptr = head
    
    while (ptr && !ptr.child) {
        ptr = ptr.next
    }
    
    if (!ptr) {
        return head
    }
    
    // ptr is not null and ptr has child
    const next = ptr.next // save ptr's next, 
    const child = ptr.child // save ptr's child
    
    ptr.child = null // move ptr's ref to child
    child.prev = ptr // add ptr to child prev
    
    ptr.next = flatten(child) // add child as ptr's next
    
    if (next) {
        while (ptr.next) {
            ptr = ptr.next
        }
        next.prev = ptr

        ptr.next = flatten(next)   
    }
    
    return head
};
