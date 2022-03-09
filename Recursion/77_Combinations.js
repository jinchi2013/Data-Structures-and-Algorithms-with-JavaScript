/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  var result = []
  var currResult = []
  function backtrack (num) {
      if (currResult.length === k) {
          result.push([...currResult])
          return
      }
      for (let i = num; i <= n; i++) {
          currResult.push(i)
          backtrack(i+1)
          currResult.pop()
      }
  }

  backtrack(1)

  return result
};
