/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length
  if (grid[0][0] == 1 || grid[n-1][n-1] == 1) {
    return -1
  }

  const q = []
  q.push({
    x: 0,
    y: 0
  })

  grid[0][0] = 1
  let steps = 1

  const rows = [1,1,1,0,0,-1,-1,-1]
  const cols = [1,0,-1,1,-1,1,0,-1]

  while (q.length !== 0) {
    let size = q.length
    for (let i = 0; i< size; ++i) {
      const curr = q.shift()
      if (curr.x == n-1 && curr.y == n-1) {
        return steps
      }

      for (let j = 0; j < 8; ++j) { // 8 for 8 direction
        const newX = curr.x + rows[j]
        const newY = curr.y + cols[j]

        if (newX < 0 || newX >= n || newY < 0 || newY >= n || grid[newX][newY] !== 0) {
          continue
        }

        grid[newX][newY] = 1
        q.push({ x: newX, y: newY })
      }
    }
    steps++
  }

  return -1
}
