/**

	Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
	run time error on leetcode

*/

var solve = function(board) {
	for(var r = 0; r < board.length ; r++) {
		for(var c = 0; c < board[r].length; c++) {
			if(board[r][c] === 'O') {
				bfs([{row: r, col: c}]);
			}
		}
	}

	for(var r = 0; r < board.length ; r++) {
		for(var c = 0; c < board[r].length; c++) {
			if(board[r][c] === 'A') {
				board[r][c] = 'X';
			}
		}
	}   

	function bfs(queue) {
		var len = queue.length;
		while(len--) {
			var first = queue.shift();
			var col = first.col;
			var row = first.row;

			if(!board[row] || !board[row][col]) {
				return false;
			}

			if(board[row][col] === 'O') {
				queue.push({row: row, col:col+1});
				queue.push({row: row, col:col-1});
				queue.push({row: row+1, col:col});
				queue.push({row: row-1, col:col});
			}
		}

		if(queue.length !== 0) {
			board[row][col] = 'A';
			res = bfs(queue);
			if(!res) {
				board[row][col] = 'O';
				return false;
			}
		}

		return true;
	}
};