function insertionSort (arr) {
  for (let i = 0; i < arr.length; ++i) {
    let temp = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      --j
    }

    arr[j+1] = temp
  }

  return arr
}


const arr = [22, 1, 4, 2, 54, 100, 89, 99]
console.log(arr)
console.log(insertionSort(arr))

