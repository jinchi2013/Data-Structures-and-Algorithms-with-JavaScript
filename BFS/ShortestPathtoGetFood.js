// https://leetcode.com/problems/shortest-path-to-get-food/
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var getFood = function(grid) {
  const dirs = [[0,1], [0,-1],[1,0], [-1,0]];
  const queue = [];
  const rowLen = grid.length;
  const colLen = grid[0].length;

  for (let i = 0; i < rowLen; i++) {
      for (let j = 0; j < colLen; j++) {
          if (grid[i][j] === '*') {
              queue.push([i, j, 0]); // [x, y, steps to this cell]
              break;
          }
      }
  }

  while(queue.length) {
      const size = queue.length;

      for (let i = 0; i < size; i++) { // loop through the queue to finish one step
          const cur = queue.shift();

          if (grid[cur[0]][cur[1]] === '#') return cur[2];

          for (let j = 0; j < dirs.length; j++) {
              const new_x = cur[0] + dirs[j][0];
              const new_y = cur[1] + dirs[j][1];

              // ignore handling any visited/blocking cell
              if (new_x < 0 || new_y < 0 || new_x >= rowLen || new_y >= colLen || grid[new_x][new_y] === 'X') continue;

              if (grid[new_x][new_y] === 'O') {
                  grid[new_x][new_y] = 'X'; // mark visited cell as 'X'
              }

              queue.push([new_x, new_y, cur[2] + 1]);
          }
      }
  }

  return -1;
};
