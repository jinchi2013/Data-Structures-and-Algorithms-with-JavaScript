const { partition } = require('../utils')

function quickSelectInPlace (arr, start, end, k) {
  var p = partition(arr, start, end)
  if (p === (k - 1)) {
    return arr[p]
  } else if (p > (k - 1)) {
    return quickSelectInPlace(arr, start, p - 1, k)
  } else {
    return quickSelectInPlace(arr, p + 1, end, k)
  }
}

function medianQuickSelect (arr) {
  return quickSelectInPlace(arr, 0, arr.length - 1, Math.floor(arr.length / 2))
}

var array = [1,3,3,-2,3,14,7,8,1,2,2]

console.log(medianQuickSelect(array))
