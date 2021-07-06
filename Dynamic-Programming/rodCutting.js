/**
 *
 * @param {the length of the Rob} n
 * @param {the price list of the Rob by its length} P
 * @example [3,3,4,4,5,6,7] => meaning for Rob length 1 sale price is 3, Rob length 2 sale price is also 3
 * @return {Max total sale price}
 */

function rodCutting (n, P) {
  const dp = Array(n+1).fill(0)
  dp[0] = 0
  dp[1] = P[0]

  for (let i = 2; i < dp.length; ++i) {
    let max = -Infinity
    let j = 0
    while (i > j) {
      max = Math.max(max, dp[i-1-j] + P[j])
      ++j
    }
    dp[i] = max
  }
  console.log(dp)
  return dp[n]
}

const P = [3,4,5,6,7,10]
const n = 6
const maxSale = rodCutting(n, P)
console.log('maxSale: ', maxSale)

const P1 = [3,4,5,6,7,10]
const n1 = 3
const maxSale1 = rodCutting(n1, P1)
console.log('maxSale1: ', maxSale1)

const P2 = [1,4,5,6,7,10]
const n2 = 3
const maxSale2 = rodCutting(n2, P2)
console.log('maxSale1: ', maxSale2)
