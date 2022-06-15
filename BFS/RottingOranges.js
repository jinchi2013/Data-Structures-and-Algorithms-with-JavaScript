/*
You are given an m x n grid where each cell can have one of three values:

    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 10
    grid[i][j] is 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
  const R = grid.length
  const C = grid[0].length
  const queue = []
  let freshCount = 0
  
  // find the rotten orange, push it into Q
  for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
          if (grid[i][j] === 2) {
              queue.push([i,j,0])
          }
          if (grid[i][j] === 1) {
              freshCount++
          }
      }
  }
  
  if (freshCount === 0) {
      return 0
  }
  
  const directions = [
      [1,0],
      [-1,0],
      [0,1],
      [0,-1]
  ]
  
  let result = -1
  
  while (queue.length !== 0) {
      const [r, c, min] = queue.shift()
      result = min
      
      for (let i = 0; i < directions.length; i++) {
          const [xi, yi] = directions[i]
          
          const x = r + xi
          const y = c + yi
          
          if (x < 0 || y < 0 || x === R || y === C || grid[x][y] === 2 || grid[x][y] === 0) {
              continue
          }
          
          grid[x][y] = 2
          queue.push([x,y,min+1])
          freshCount--
      }
  }
  
  return freshCount === 0 ? result : -1
};
