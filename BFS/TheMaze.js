// https://leetcode.com/problems/the-maze/
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
 var hasPath = function(maze, start, destination) {
  const row = maze.length
  const col = maze[0].length
  const queue = [start]
  const [dx, dy] = destination
  while (queue.length !== 0) {
      const [x, y] = queue.shift()

      if (maze[x, y] === 2) continue

      // Hit the dest, break the loop
      if (x === dx && y === dy) {
          return true
      }

      maze[x][y] = 2 // mark curruent position visited

      // move down
      let i = 1
      while (x+i < row && maze[x+i][y] !== 1) {
          ++i
      }
      if (maze[x+i-1][y] !== 2) {
          queue.push([x+i-1, y])
      }
      // move left
      i = 1
      while (y-i >=0 && maze[x][y-i] !== 1) {
          ++i
      }
      if (maze[x][y-i+1] !== 2) {
          queue.push([x, y-i+1])
      }
      // move right
      i = 1
      while (y+i < col && maze[x][y+i] !== 1) {
          ++i
      }
      if (maze[x][y+i-1] !== 2) {
          queue.push([x, y+i-1])
      }
      // move top
      i = 1
      while (x-i >= 0 && maze[x-i][y] !== 1) {
          ++i
      }
      if (maze[x-i+1][y] !== 2) {
          queue.push([x-i+1, y])
      }
  }

  return false
};
