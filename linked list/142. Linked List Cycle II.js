
/**
 *
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

 Note: Do not modify the linked list.

 a cycle looks a like 1-2-3-4-2-3-4-2-3-4 ......continue and there is a loop in the list

 this distance of slow pointer = a + b;
 while the distance of fast pointer = a + b + c + b;
 so get the conclusion 2(a+b) = a + b + c + b ==>> a = c
 so if we have another two pointers each starts from head and the meeting point in the mid of cycle,
 both move 1 step each time
 they gonna meet at the cycle beginning node.

 Follow up:
 Can you solve it without using extra space?
 *
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
var detectCycle = function(head) {
    var slow = head;
    var fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next;

        if(!fast.next) {
            return null;
        }

        fast = fast.next;

        if(fast === slow) {
            var headStart = head;
            var cycleMid = fast;

            while(headStart !== cycleMid) {
                headStart = headStart.next;
                cycleMid = cycleMid.next;
            }

            return headStart;
        }
    }

    return null;

};