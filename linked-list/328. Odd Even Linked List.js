/**
 *
 * Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

 You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

 Example:
 Given 1->2->3->4->5->NULL,
 return 1->3->5->2->4->NULL.

 Note:
 The relative order inside both the even and odd groups should remain as it was in the input.
 The first node is considered odd, the second node even and so on ...
 *
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var oddEvenList = function(head) {
    if(!head || !head.next ) {
        return head;
    }

    var dP1 = new ListNode('dP1');
    var dP2 = head.next;

    dP1.next = head;

    var p1 = head;
    var p2 = p1.next;

    while(p1.next && p2.next) {
        p1.next = p2.next;
        p1 = p1.next;

        if(p1) {
            p2.next = p1.next;
            p2 = p2.next;
        }

        if(!p2) {
            p1.next = dP2;
            return dP1.next;
        }
    }

    p1.next = dP2;

    return dP1.next;
};
