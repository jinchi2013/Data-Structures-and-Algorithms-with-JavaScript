const { swap } = require('./../utils')

function selectionSort (arr) {
  let min
  for(let outer = 0; outer <= arr.length - 2; ++outer) {
    min = outer
    for (let inner = outer + 1; inner <= arr.length - 1; ++inner ) {
      // compare the rest of the element with the store min
      if (arr[inner] < arr[min]) {
        min = inner
      }
    }

    swap(arr, outer, min)
  }

  return arr
}

const arr = [0, 1, 4, 2, 54, 100, 89, 99]
console.log(arr)
console.log(selectionSort(arr))

module.export = selectionSort
