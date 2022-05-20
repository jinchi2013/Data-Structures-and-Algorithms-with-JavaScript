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
