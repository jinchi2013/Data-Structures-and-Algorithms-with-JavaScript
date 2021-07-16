/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeKSortedLists (lists) {
  const len = lists.length
  if (len === 0) {
    return new ListNode()
  }

  return mergeRange(lists, 0, len-1)
}

function mergeRange (lists, l, h) {
  if (l === h) {
    return lists[l]
  }

  if (l > r) {
    return null
  }
  if (l < h) {
    const mid = Math.floor((l+h)/2)
    const left = mergeRange(lists, l, mid)
    const right = mergeRange(lists, mid+1, h)
    return mergeTwo(left, right)
  }
}

// Merge two sorted linked-list
function mergeTwo (l, r) {
  if (l === null) {
    return r
  }

  if (r === null) {
    return l
  }

  if (l.val < r.val) {
    l.next = mergeTwo(l.next, r)
    return l
  } else {
    r.next = mergeTwo(l, r.next)
    return r
  }
}
