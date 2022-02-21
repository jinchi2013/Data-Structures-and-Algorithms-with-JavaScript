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
      var topLeft = search(rowStart, rowPivot-1, colStart, colPivot -1, matrix, target)
      var topRight = search(rowStart, rowPivot-1, colPivot, colEnd, matrix, target)
      var bottomLeft = search(rowPivot, rowEnd, colStart, colPivot - 1, matrix, target)

      return topLeft || topRight || bottomLeft
  }

  if (pivot < target) {
      var topRight = search(
          rowStart,
          rowPivot,
          colPivot+1,
          colEnd,
          matrix,
          target
      )
      var bottomLeft = search(rowPivot+1, rowEnd, colStart, colPivot, matrix, target)
      var bottomRight = search(rowPivot+1, rowEnd, colPivot+1, colEnd, matrix, target)

      return topRight || bottomLeft || bottomRight
  }

}

var searchMatrix = function(matrix, target) {
  return search(0, matrix.length-1, 0, matrix[0].length-1, matrix, target)
}
