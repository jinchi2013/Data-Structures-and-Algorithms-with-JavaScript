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
    if(m >= n) {
        return head;
    }

    var dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;

    // move head to m -1 node;
    for(var i =0; i < m-1; i++) {
        head = head.next;
    }

    var pre = head.next;
    var cur = pre.next;

    for(i=0; i< n-m; i++) {
        var tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }

    head.next.next = cur;
    head.next = pre;

    return dummy.next;
};