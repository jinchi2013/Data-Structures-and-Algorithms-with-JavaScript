const { swap } = require('./../utils')

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j <= i; ++j) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j)
      }
    }
  }
}

const arr = [1, 0, 4, 2, 54, 44, 100, 89, 99, 2]
console.log(arr)
bubbleSort(arr)
console.log(arr)

module.export = bubbleSort
