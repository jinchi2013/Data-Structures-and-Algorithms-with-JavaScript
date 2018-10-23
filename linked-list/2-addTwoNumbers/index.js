/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 * 
 * 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function(l1, l2) {
  let dummyhead = new ListNode(0)
  let p1 = l1, 
      p2 = l2, 
      curr = dummyhead,
      carry = 0
  
  while(!!p1 || !!p2) {
      let v1 = !!p1 ? p1.val : 0
      let v2 = !!p2 ? p2.val : 0
      let sum = carry + v1 +v2
      carry = Math.floor(sum / 10)
      curr.next = new ListNode(sum % 10)
      curr = curr.next
      if (!!p1) p1 = p1.next
      if (!!p2) p2 = p2.next
  }
  
  if (carry > 0) {
      curr.next = new ListNode(carry)
  }

  return dummyhead.next
};

function ln(val) {
  return {
    val: val,
    next: null
  }
}

var l1 = ln(2)
l1.next = ln(4)
l1.next.next = ln(4)
// 2 -> 4 -> 4
// 1 -> 3 -> 5

var l2 = ln(1)
l2.next = ln(3)
l2.next.next = ln(5)

console.log(addTwoNumbers(l1, l2))
