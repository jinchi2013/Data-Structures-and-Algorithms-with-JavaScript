/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function swap (pq, i, j) {
  const temp = pq[i]
  pq[i] = pq[j]
  pq[j] = temp
}

function bubble_up (pq, index, value) {
  const parentIndex = Math.trunc(index/2) || 1
  const pval = pq[parentIndex]
  if (pval) {
    if (pval < pq[index]) {
      swap(pq, index, parentIndex)
      bubble_up(pq, parentIndex)
    }
  } else {
    pq[parentIndex] = value
    bubble_up(pq, parentIndex)
  }
}

function bubble_down (pq, index) {
  const leftChild = index * 2
  let minIndex = index
  for (let i = 0; i <= 1; ++i) {
    if (pq[index] > pq[leftChild+i]) {
      minIndex = leftChild+i
    }
  }

  if (minIndex !== index) {
    swap(pq, index, minIndex)
    bubble_down(pq, minIndex)
  }
}

function pq_extract_min (pq) {
  const min = pq[1]
  const lastValue = pq[pq.length-1]
  pq[1] = lastValue
  pq.length = pq.length - 1
  bubble_down(pq, 1)

  return min
}

function pq_insert (pq, value) { // insert value = target[index] in array pq
  if (size >= pq.length) {
    throw Error('queue overflow')
  }
  const last = pq.length - 1
  bubble_up(pq, last, value)
}

function makeHeap (priorityQueue, target, size) {
  for (let i = 0; i < target.length; ++i) {
    pq_insert(priorityQueue, target[i], size)
    ++size
  }
}

var heap = function(nums, k) {
  const l = nums.length
  const priorityQueue = Array(l+1).fill(null)
  makeHeap(priorityQueue, nums, l+1)

  let result = 0

  for (let i = 0; i <= k; ++i) {
    result = pq_extract_min(priorityQueue)
  }

  return result
};

/**
 *
 * @param {array base priorityQueue, length is n} pq
 * @param {index in queue} index
 * @param {example: kth smallest} count
 * @param {value} x
 *
 * Given an array-based heap on n elements and a real number x, efficiently
   determine whether the kth smallest element in the heap is greater than or equal
   to x.
 */

function heapCompare (pq, index, count, x) {
  // we will look at total K === count element in the queue
  // so if count == 0 meaning we looked K elements already
  // all of the K elements are smaller than x
  /*
    so we can say x is greater than Kth smallest element in heap
  */
  if (count <= 0 || i > pq.length) return count

  if (pq[index] < x) { // if any x is smaller than pq[index] it mean x is smaller than Kth smallest element in heap
    const leftChild = index * 2
    const rightChild = leftChild + 1
    count = heapCompare(pq, leftChild, count-1, x) // here since pq[index] < x, we looked one element, so the total elements will need to look is K-1
    count = heapCompare(pq, rightChild, count, x)
  }

  return count
}
