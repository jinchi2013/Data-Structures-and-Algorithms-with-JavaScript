function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// Partition from the start
function partitionFromStart (arr, s, e) {
  var p = e; // pivot element index
  var firstHigh = s; // divider position for pivot element

  for (let i = s; i <= e; ++i) {
    if (arr[i] < arr[p]) {
      swap(arr, i, firstHigh);
      firstHigh++;
    }
  }

  swap(arr, firstHigh, p);
  return firstHigh;
}

// Partition from middle point
function partition (arr, left, right) {
  var median = arr[Math.floor((left + right) / 2)]
  while (right >= left) {
    while (arr[left] < median) {
      ++left
    }

    while (arr[right] > median) {
      --right
    }

    if (right >= left) {
      const temp = arr[right]
      arr[right] = arr[left]
      arr[left] = temp
      ++left
      --right
    }
  }

  return left - 1
}

exports.swap = swap
exports.partition = partition
exports.partitionFromStart = partitionFromStart

const arr = [2,1,4,3,11,3]
console.log(partition(arr, 0, 5), arr)
const arr1 = [2,1,4,3,11,3]
console.log(partitionFromStart(arr1, 0, 5), arr1)