/*

 Reverse a linked list from position m to n. Do it in-place and in one-pass.

 For example:
 Given 1->2->3->4->5->NULL, m = 2 and n = 4,

 return 1->4->3->2->5->NULL.

 Note:
 Given m, n satisfy the following condition:
 1 ≤ m ≤ n ≤ length of list.

 function node(val) {
    this.val = val;
    this.next = null;
 }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if( m === n ) {
        return head;
    }

    // find a node with val
    function find(val, lists) {
        var currNode = lists;

        while(currNode.val !== val) {
            currNode = currNode.next;
        }

        return currNode;
    }

    // find a previous value for given node
    function findPrevious(val, lists) {
        var currNode = lists;
        while(currNode.next !== null && currNode.next.val !== val) {
            currNode = currNode.next;
        }

        return currNode;
    }

    // get the length of the node
    function getLength(nodeLists) {
        var currNode = nodeLists;
        while(currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode.val;
    }

    // close node next with given val
    function closeANode(val, list) {
        var currList = list;
        while( currList.next !== null ) {
            if( currList.val === val ) {
                currList.next = null;
            }
        }
    }

    // normal reverse a linked list function
    function reverseLList (list) {
        var cur = list,
            next;

        list = null;
        while(cur) {
            next = cur.next;
            cur.next = list;

            if(next) {
                list = cur;
                cur = next;
            } else {
                return cur;
            }
        }

        return null;
    }


    var length = getLength(head);
    var rangeHead = Object.assign( {}, find(m, head) );

    if( n !== length ) {
        // save rest list in to tail variable
        var tail = Object.assign( {}, find(n+1, head) );
    }

    // set rangeEnd.next to null in rangeHead list
    closeANode(n, rangeHead);
    var reversedRangeHead = reverseLList(rangeHead);

    if( m !== head.val ) {
        var rangeHeadPrevious = findPrevious(m, head);
        rangeHeadPrevious.next = null;
        rangeHeadPrevious.next = reversedRangeHead;

        if(tail) {
            var recombinedListLastNode = find(m, reversedRangeHead);
            recombinedListLastNode.next = tail;
        } else {
            return head;
        }
    } else {
        return reversedRangeHead;
    }
};