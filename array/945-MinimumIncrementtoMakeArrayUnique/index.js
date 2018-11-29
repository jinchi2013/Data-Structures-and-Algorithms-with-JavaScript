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
  let dp = Array(40000).fill(0), ret = 0, max = Math.max(...A), key = Math.min(...A);
  A.forEach(n => dp[n] += 1)
  
  while (key < max) {
     let new_key = key + 1;
      if (dp[key] > 1) {
          let overflow = dp[key] - 1;
          dp[new_key] += overflow;
          ret += overflow;
      }
      key = new_key;
  }
  
  if  (dp[max] > 1) {
      let n = dp[max];
      let head = 0, tail = n - 1;
      ret += (head + tail) * n / 2; 
  }
  return ret;
};
