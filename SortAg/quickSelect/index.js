const { partition } = require('../utils')

function quickSelectInPlace (arr, start, end, k) {
  var p = partition(arr, start, end)
  if (p === (k - 1)) {
    return arr[p]
  } else if (p > (k - 1)) {
    return quickSelectInPlace(arr, start, p, k)
  } else {
    return quickSelectInPlace(arr, p + 1, end, k)
  }
}

function medianQuickSelect (arr, k = 0) {
  return quickSelectInPlace(arr, 0, arr.length - 1, k)
}

var arr = [1,2,3,4,5,6,7]

console.log(medianQuickSelect(arr, 1))
console.log(medianQuickSelect(arr, 2))
console.log(medianQuickSelect(arr, 3))
console.log(medianQuickSelect(arr, 5))

var arr1 = [1,3,3,-2,3,14,7,8,1,2,2]

console.log(medianQuickSelect(arr1))
