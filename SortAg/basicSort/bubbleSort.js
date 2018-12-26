const { swap } = require('./../utils')

function bubbleSort(arr) {
  for (let outer = arr.length; outer >= 2; --outer) {
    for(let inner = 0; inner <= outer-1; ++inner) {
      if (arr[inner] > arr[inner+1]) {
        swap(arr, inner, inner+1)
      }
    }
  }

  return arr
}

const arr = [1, 0, 4, 2, 54, 44, 100, 89, 99, 2]
console.log(arr)
console.log(bubbleSort(arr))

module.export = bubbleSort
