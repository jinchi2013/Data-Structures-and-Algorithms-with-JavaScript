const { partition } = require('../utils')

function quickSort (arr) {
  return quickSortHelper(arr, 0, arr.length - 1)
}

function quickSortHelper (arr, left, right) {
  let median
  if (arr.length > 1) {
    median = partition(arr, left, right)

    if (left < median) {
      quickSortHelper(arr, left, median - 1)
    }

    if (right > median) {
      quickSortHelper(arr, median + 1, right)
    }
  }

  return arr
}

var arr = [2,4,1,12,11,0]
console.log(arr)
console.log(quickSort(arr))
var array = [1,3,3,-2,3,14,7,8,1,2,2]
console.log(array)
console.log(quickSort(array))