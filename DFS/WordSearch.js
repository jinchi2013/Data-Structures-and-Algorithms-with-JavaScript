/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const row = board.length
  const col = board[0].length

  function searchStart (wordIndex, x, y) {
      // check the bottom case
      if (wordIndex === word.length) { return true }

      // check the boundary
      if (x < 0 || y < 0 || x >= row || y >= col || board[x][y] === '#' || board[x][y] !== word[wordIndex])  {
          return false
      }

      board[x][y] = '#'

      // four direction: down, right, left, up
      const rowDir = [0, 1, -1, 0]
      const colDir = [1, 0, 0, -1]

      for (let i = 0; i < 4; ++i) {
          if (searchStart(wordIndex+1, x+rowDir[i], y+colDir[i])) {
              return true
          }
      }
      board[x][y] = word[wordIndex] // reset the word char as wordIndex
      return false

  }

  for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
          if ( searchStart(0, i, j) ) {
              return true
          }
      }
  }

  return false
};
