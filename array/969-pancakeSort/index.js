/**
 * Given an array A, we can perform a pancake flip: 
 * We choose some positive integer k <= A.length,
 * then reverse the order of the first k elements of A. 
 * We want to perform zero or more pancake flips (doing them one after another in succession)
 * to sort the array A.

  Return the k-values corresponding to a sequence of pancake flips that sort A.  
  Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.

  Example 1:

  Input: [3,2,4,1]
  Output: [4,2,4,3]
  Explanation: 
  We perform 4 pancake flips, with k values 4, 2, 4, and 3.
  Starting state: A = [3, 2, 4, 1]
  After 1st flip (k=4): A = [1, 4, 2, 3]
  After 2nd flip (k=2): A = [4, 1, 2, 3]
  After 3rd flip (k=4): A = [3, 2, 1, 4]
  After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted. 
  Example 2:

  Input: [1,2,3]
  Output: []
  Explanation: The input is already sorted, so there is no need to flip anything.
  Note that other answers, such as [3, 3], would also be accepted.
  

  Note:

  1 <= A.length <= 100
  A[i] is a permutation of [1, 2, ..., A.length]
 */


/**
 * @param {number[]} A
 * @return {number[]}
 */

/**
 * The pancakeSort will only apply to an array like [4,1,3,2] etc.
 * in which there is no duplicate, max === array's length
 */
var pancakeSort = function(A) {
  const max = A.length // which is the max of the A
  let loop = max
  let results = []

  function ifWholeReverseNeeded (loop) {
    if (loop - 1 === 0) return

    if (A[loop - 1] === 1 || A[0] === loop) {
      A = [
        ...A.slice(0, loop).reverse(),
        ...A.slice(loop)
      ]
      results.push(loop)
    }
  }

  while (loop > 0) {
    ifWholeReverseNeeded(loop)
    for (let i = 0; i < loop - 1; ++i) {
      if (A[i] === loop) {
        A = [
          ...A.slice(0, i + 1).reverse(),
          ...A.slice(i + 1)
        ]
        results.push(i+1)
        ifWholeReverseNeeded(loop)
      }
    }

    if (A[loop - 1] === loop) {
      --loop
    }
  }
  console.log(A)
  return results
}

// [3,2,4,1]

console.log(pancakeSort([2,1,4,3,5]))
//console.log(pancakeSort([3,2,4,1]))
