function insertionSort (arr) {
  let temp
  let inner

  for(let outer = 1; outer <= arr.length -1; ++outer) {
    temp = arr[outer]
    inner = outer
    while(inner > 0 && (arr[inner - 1] >= temp)) {
      arr[inner] = arr[inner - 1]
      --inner
    }
    arr[inner] = temp
  }

  return arr
}


const arr = [22, 1, 4, 2, 54, 100, 89, 99]
console.log(arr)
console.log(insertionSort(arr))
