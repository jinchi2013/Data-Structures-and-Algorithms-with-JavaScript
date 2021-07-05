/**
 * Serveral coins placed in the cells of Matrix M, no more than one per cell
 * A robot, located in the upper left cell of Matrix M, needs to collect as many of the coins as possible
 * and bring them to the bottom right cell.
 * On each step, the robot can move either one cell to the right or one cell down from its current location
 * @param {int[][]} M - Matrix of m x n; M.length === m; M[0].length === n
 * @return {int} largest number of coins the robot can bring to cell Matrix[m][n]
 */

/**
 * For exercises, the cell could be inaccessible if there is a 'x' in the cell
 * So there are two case
 * Case 1. Assume the robot can always move to the last cell of the matrix
 *
 * Case 2. if robot can not make it to the last cell return -1
 */

function robotCoinCollection (M) {
  const rows = M.length
  const cols = M[0].length

  const dp = [...Array(rows+1)].map(() => Array(cols+1).fill(0))

  dp[1][1] = M[0][0]
  for (let j = 2; j <= cols; ++j) {
    if (M[0][j-1] !== 'x' && dp[1][j-1] !== 'x') {
      dp[1][j] = dp[1][j-1] + M[0][j-1]
    } else {
      dp[1][j] = 'x'
    }
  }

  for (let i = 2; i <= rows; ++i) {
    if (M[i-1][0] !== 'x' && dp[i-1][1] !== 'x') {
      dp[i][1] = dp[i-1][1] + M[i-1][0]
    } else {
      dp[i][1] = 'x'
    }

    for (let j = 2; j <= cols; ++j) {
      if (M[i-1][j-1] === 'x') {
        dp[i][j] = 'x'
      } else if (dp[i-1][j] === 'x' && dp[i][j-1] === 'x') {
        dp[i][j] = 'x'
      } else {
        dp[i][j] = Math.max(
          dp[i-1][j] !== 'x' ? dp[i-1][j] : 0,
          dp[i][j-1] !== 'x' ? dp[i][j-1] : 0
        ) + M[i-1][j-1]
      }
    }
  }

  console.log(dp)

  return dp[rows][cols] === 'x' ? -1 : dp[rows][cols]
}

const BlockingM = [
  [0,'x',0,0,1,0],
  [1,0,0,'x',1,0],
  [0,0,0,'x',1,0],
  [0,0,'x',1,0,1],
  ['x','x','x',0,1,0],
]

const NotReachable = robotCoinCollection(BlockingM)
console.log('maxCoinCollected: ', NotReachable)

const BlockingM2 = [
  [0,'x',0,0,1,0]
]

const NotReachableM2 = robotCoinCollection(BlockingM2)
console.log('maxCoinCollected: ', NotReachableM2)

const M1 = [
  [0,'x',0,0,1,0],
  [1,0,0,'x',1,0],
  [0,0,0,'x',1,0],
  [0,0,0,1,0,1],
  ['x','x','x',0,1,0],
]

const maxCoinCollected_M1 = robotCoinCollection(M1)
console.log('maxCoinCollected from M1: ', maxCoinCollected_M1)

const M2 = [
  [0,'x',0,0,1,0],
  [1,0,0,'x',1,0],
  [0,0,0,'x',1,0],
  [0,'x',0,1,0,1],
  ['x','x','x',0,1,0],
]

const maxCoinCollected_M2 = robotCoinCollection(M2)
console.log('maxCoinCollected from M2: ', maxCoinCollected_M2)
