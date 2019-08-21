function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function partition (arr, left, right) {
  const median = Math.floor((left + right) / 2)
  while (right >= left) {
    while (arr[left] < arr[median]) {
      ++left
    }

    while (arr[right] > arr[median]) {
      --right
    }

    if (right > left) {
      const temp = arr[right]
      arr[right] = arr[left]
      arr[left] = temp
      ++left
      --right
    }
  }

  return left
}

exports.swap = swap
exports.partition = partition
