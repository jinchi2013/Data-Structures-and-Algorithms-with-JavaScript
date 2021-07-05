/**
 *
 * @param {Int for denomination of coins} D for example, D = 3, all available coins are 1,2,3
 * @param {Total amount needs to collect} n
 * @return {Minimum count of coins use to achieve amount n}
 */

function changeMaking (D, n) {
  const dp = Array(n+1).fill(0)
  const coins = Array(D).fill(0).map((_, i) => 1+i)
  dp[0] = 0
  // dp[n] = dp[n-D[j]] + 1 where n >= D[j]
  // so in order to get dp[n], I need to get dp[n-D[j]]

  for (let i = 1; i < dp.length; ++i) {
    let d = 0
    let min = Infinity
    while (i >= coins[d] && d < D) {
      min = Math.min(min, dp[i - coins[d]])
      ++d
    }
    dp[i] = min + 1
  }
  console.log(dp)
  return dp[dp.length-1]
}

var D = 1, n = 9
console.log(D, n, changeMaking(D, n))

var D = 3, n = 9
console.log(D, n, changeMaking(D, n))

var D = 5, n = 9
console.log(D, n, changeMaking(D, n))
