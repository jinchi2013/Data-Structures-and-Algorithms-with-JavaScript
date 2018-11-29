/**
 * Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

  Return the least number of moves to make every value in A unique.

  

  Example 1:

  Input: [1,2,2]
  Output: 1
  Explanation:  After 1 move, the array could be [1, 2, 3].
  Example 2:

  Input: [3,2,1,2,1,7]
  Output: 6
  Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
  It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

  Note:

  0 <= A.length <= 40000
  0 <= A[i] < 40000
 * 
 */

/**
 * @param {number[]} A
 * @return {number}
 */
// exceed time limit
// var minIncrementForUnique = function(A) {
//   const map = {}
//   let count = 0

//   for(var i = 0; i < A.length; i++) {
//     while(map[A[i]]) {
//       A[i]++
//       count++
//     }

//     if (!map[A[i]]) {
//       map[A[i]] = true
//     }
//   }

//   return count
// };

var minIncrementForUnique = function(A) {
  let dp = Array(40000).fill(0),
    max = Math.max(...A),
    key = Math.min(...A),
    count = 0

  A.forEach(n => dp(n) += 1)

  while(key < max) {
    let new_key = key + 1
    if (dp[key] > 1) {
      let overflow = dp[key] - 1
      dp[new_key] += overflow
      count += overflow
    }
    key = new_key
  }

  if (dp[max] > 1) {
    let n = dp[max]
    count += (n - 1) * n / 2
  }

  return count
};
