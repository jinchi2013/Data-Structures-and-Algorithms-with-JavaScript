function search(rowStart, rowEnd, colStart, colEnd, matrix, target) {
  if (rowEnd < rowStart || colEnd < colStart) {
    return false
  }
  var rowPivot = Math.floor((rowStart + rowEnd) / 2)
  var colPivot = Math.floor((colStart + colEnd) / 2)

  var pivot = matrix[rowPivot][colPivot]

  if (pivot === target) {
    return true
  }

  if (pivot > target) {
    var topLeft = search(rowStart, rowPivot - 1, colStart, colPivot - 1, matrix, target)
    var topRight = search(rowStart, rowPivot - 1, colPivot, colEnd, matrix, target)
    var bottomLeft = search(rowPivot, rowEnd, colStart, colPivot - 1, matrix, target)

    return topLeft || topRight || bottomLeft
  }

  if (pivot < target) {
    var topRight = search(
      rowStart,
      rowPivot,
      colPivot + 1,
      colEnd,
      matrix,
      target
    )
    var bottomLeft = search(rowPivot + 1, rowEnd, colStart, colPivot, matrix, target)
    var bottomRight = search(rowPivot + 1, rowEnd, colPivot + 1, colEnd, matrix, target)

    return topRight || bottomLeft || bottomRight
  }

}

function search_better_partition(rowStart, rowEnd, colStart, colEnd, matrix, target) {
  if (rowEnd < rowStart || colEnd < colStart) {
    return false
  }
  // check the smallest and the largest value in the matrix
  if (target < matrix[rowStart][colStart] || target > matrix[rowEnd][colEnd]) {
    return false
  }

  var mid = Math.floor((colStart + colEnd) / 2)

  // find the matrix[row-1][mid] < target < matrix[row][mid]
  var row = rowStart
  while (row <= rowEnd && target >= matrix[row][mid]) {
    if (target === matrix[row][mid]) {
      return true
    }
    row++
  }
  // when come to here
  // matrix[row-1][mid] < target < matrix[row][mid]
  var bottomLeft = search(row, rowEnd, colStart, mid - 1, matrix, target)
  var topRight = search(rowStart, row - 1, mid + 1, colEnd, matrix, target)
  return bottomLeft || topRight
}

var searchMatrix = function (matrix, target) {
  return search(0, matrix.length - 1, 0, matrix[0].length - 1, matrix, target)
}
