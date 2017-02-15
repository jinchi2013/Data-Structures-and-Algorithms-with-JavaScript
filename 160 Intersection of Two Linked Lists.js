/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.


 For example, the following two linked lists:

 A:          a1 → a2
                     ↘
                      c1 → c2 → c3
                     ↗
 B:     b1 → b2 → b3
 begin to intersect at node c1.


 Notes:

 If the two linked lists have no intersection at all, return null.
 The linked lists must retain their original structure after the function returns.
 You may assume there are no cycles anywhere in the entire linked structure.
 Your code should preferably run in O(n) time and use only O(1) memory.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var getLength = function(head) {
        var length = 0;

        while(head) {
            head = head.next;
            length++;
        }

        return length;
    }

    var lenA = getLength(headA);
    var lenB = getLength(headB);

    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    while(lenA && lenB) {
        if(headB === headA) {
            return headA;
        }

        headA = headA.next;
        headB = headB.next;
    }

    return null;
};

/**
 * another solution use two pointer, travel through both two linked list
 * */

var getIntersectionNodeII = function (headA, headB) {
    var a = headA;
    var b = headB;

    while(a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
};