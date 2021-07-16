// https://leetcode.com/problems/design-tic-tac-toe/
/**
 * Initialize your data structure here.
 * @param {number} n
 */
 var TicTacToe = function(n) {
  this.rows = Array(n).fill(0)
  this.cols = Array(n).fill(0)
  this.diagonal = 0
  this.antiDiagonal = 0
  this.n = n
};

/**
* Player {player} makes a move at ({row}, {col}).
      @param row The row of the board.
      @param col The column of the board.
      @param player The player, can be either 1 or 2.
      @return The current winning condition, can be either:
              0: No one wins.
              1: Player 1 wins.
              2: Player 2 wins.
* @param {number} row
* @param {number} col
* @param {number} player
* @return {number}
*/
TicTacToe.prototype.move = function(row, col, player) {
  this.rows[row] += player === 1 ? 1 : -1

  if (Math.abs(this.rows[row]) === this.n) return player

  this.cols[col] += player === 1 ? 1 : -1

  if (Math.abs(this.cols[col]) === this.n) return player

  if (row === col) { // diagonal
      this.diagonal += player === 1 ? 1 : -1

      if (Math.abs(this.diagonal) === this.n) return player
  }

  if (row+col === this.n-1) { // antiDiagonal
      this.antiDiagonal += player === 1 ? 1 : -1

      if (Math.abs(this.antiDiagonal) === this.n) return player
  }
  return 0
};

/**
* Your TicTacToe object will be instantiated and called as such:
* var obj = new TicTacToe(n)
* var param_1 = obj.move(row,col,player)
*/