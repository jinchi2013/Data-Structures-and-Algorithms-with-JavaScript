const { partition } = require('../utils')

function quickSort (arr) {
  return quickSortHelper(arr, 0, arr.length - 1)
}

function quickSortHelper (arr, left, right) {
  let median
  if (arr.length > 1) {
    median = partition(arr, left, right)

    if (left < median - 1) {
      quickSortHelper(arr, left, median - 1)
    }

    if (right > median) {
      quickSortHelper(arr, median, right)
    }
  }

  return arr
}

var arr = [2,4,1,12,11,0]
console.log(arr)
console.log(quickSort(arr))