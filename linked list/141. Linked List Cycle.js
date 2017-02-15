/**
 * Given a linked list, determine if it has a cycle in it.

 Follow up:
 Can you solve it without using extra space?
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * Will try to resolve this by hash table
 * */
var hasCycle = function(head) {
    var hashTable = {};

    while (head) {
        // when the node value is exist in the table
        // we need to make a compare between the existed reference and new reference
        // If they are the same we can return true
        // else the same node value's reference will be replaced.
        if(hashTable.hasOwnProperty(head.val) && hashTable[head.val] === head) {
            return true;
        }

        // here we need to save the reference of current head into the hash table
        hashTable[head.val] = head;
        head = head.next;
    }

    return false;
};

/**
 * another solution with fast and slow pointers
 * */

var hasCycleTwoPointers = function(head) {
    var faster = head;
    var slower = head;

    while(faster && faster.next) {
        slower = slower.next;
        faster = faster.next;

        if(!faster.next) {
            return false;
        }

        faster = faster.next;

        if(faster === slower) {
            return true;
        }
    }

    return false;
};
