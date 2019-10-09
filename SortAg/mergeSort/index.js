function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  }

  var midpoint = Math.floor((arr.length / 2))
  var leftArr = arr.slice(0, midpoint)
  var rightArr = arr.slice(midpoint)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge (leftArr, rightArr) {
  var results = []
  var leftIndex = 0
  var rightIndex = 0

  while(leftIndex < leftArr.length && rightIndex < rightArr,length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      results.push(leftArr[leftIndex])
      ++leftIndex
    } else {
      results.push(rightArr[rightIndex])
      ++rightIndex
    }
  }

  var leftRemains = leftArr.slice(leftIndex)
  var rightRemains = rightArr.slice(rightIndex)

  return [
    ...results,
    ...leftRemains,
    ...rightRemains
  ]
}
