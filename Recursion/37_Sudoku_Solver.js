/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  var r = [...Array(9)].map(() => Array(10).fill(0))
  var c = [...Array(9)].map(() => Array(10).fill(0))
  var boxes = [...Array(9)].map(() => Array(10).fill(0))
  var N = 3
  var resolved = false

  function getBoxId(row, col) {
    return Math.floor(Math.floor(row / N) * N + col / N)
  }

  function placeNumber(n, row, col) {
    const boxId = getBoxId(row, col)
    const num = Number(n)
    r[row][num]++
    c[col][num]++
    boxes[boxId][num]++
    board[row][col] = num + ''
  }

  function removeNumber(n, row, col) {
    const boxId = getBoxId(row, col)
    const num = Number(n)
    r[row][num]--
    c[col][num]--
    boxes[boxId][num]--
    board[row][col] = '.'
  }

  function couldPlace(n, row, col) {
    const num = Number(n)
    const boxId = getBoxId(row, col)
    return r[row][num] + c[col][num] + boxes[boxId][num] === 0
  }

  function placeNextNum(row, col) {
    if (row === 8 && col === 8) {
      resolved = true
    } else {
      if (col === 8) {
        backtrack(row + 1, 0)
      } else {
        backtrack(row, col + 1)
      }
    }
  }

  function backtrack(row, col) {
    if (board[row][col] === '.') {
      for (let i = 1; i < 10; ++i) {
        if (couldPlace(i, row, col)) {
          placeNumber(i + '', row, col)
          placeNextNum(row, col)
          if (!resolved) {
            removeNumber(i, row, col)
          }
        }
      }
    } else {
      placeNextNum(row, col)
    }
  }

  // Mark the position that already has a number
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== '.') {
        placeNumber(board[i][j], i, j)
      }
    }
  }
  backtrack(0, 0)
};
