/**

	Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;

    function bfs(queue) {
    	var len =  queue.length;

    	while(len--) {
    		var top = queue.shift();	
    		var i = top.row;
    		var j = top.col;

    		if(grid[i] && grid[i][j] && grid[i][j] == '1') {
    			grid[i][j] = 2;
    			queue.push({row: i+1, col:j});
    			queue.push({row: i-1, col:j});
    			queue.push({row: i, col: j+1});
    			queue.push({row: i, col: j-1});
    		}
    	}

    	if(queue.length !== 0) {
    		bfs(queue);
    	}
    	

    }

    grid.forEach(function(row, y) {
    	row.forEach(function(element, x) {
    		if(grid[y][x] === '1') {
    			bfs([{row: y, col: x}])
    			count++;
    		}
    	})
    })

    return count;
};