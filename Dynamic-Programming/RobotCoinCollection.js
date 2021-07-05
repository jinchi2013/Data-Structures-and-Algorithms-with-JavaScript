/**
 * Serveral coins placed in the cells of Matrix M, no more than one per cell
 * A robot, located in the upper left cell of Matrix M, needs to collect as many of the coins as possible
 * and bring them to the bottom right cell.
 * On each step, the robot can move either one cell to the right or one cell down from its current location
 * @param {int[][]} M - Matrix of m x n; M.length === m; M[0].length === n
 * @return {int} largest number of coins the robot can bring to cell Matrix[m][n]
 */

function robotCoinCollection (M) {
  const rows = M.length
  const cols = M[0].length

  const dp = [...Array(rows+1)].map(() => Array(cols+1).fill(0))

  dp[1][1] = M[0][0]
  for (let j = 2; j <= cols; ++j) {
    dp[1][j] = dp[1][j-1] + M[0][j-1]
  }

  for (let i = 2; i <= rows; ++i) {
    dp[i][1] = dp[i-1][1] + M[i-1][0]

    for (let j = 2; j <= cols; ++j) {
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + M[i-1][j-1]
    }
  }

  return dp[rows][cols]
}

const M = [
  [0,0,0,0,1,0],
  [0,1,0,1,0,0],
  [0,0,0,1,0,1],
  [0,0,1,0,0,1],
  [1,0,0,0,1,0],
]

const maxCoinCollected = robotCoinCollection(M)
console.log('maxCoinCollected: ', maxCoinCollected)
