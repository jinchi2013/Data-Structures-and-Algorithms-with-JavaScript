/*

	Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) {
    	return head;
    }

    var previous = new ListNode('dummy');
    previous.next = head;
    var current = head;
    head = previous;

    while(current) {
    	if(current.val === val) {
    		previous.next = current.next;
    		current = current.next;
    	} else {
    		previous = current;
    		current = current.next;
    	}
    }

    return head.next;
};