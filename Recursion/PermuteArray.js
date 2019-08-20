function permuteArray (arr) {
  permute(arr, 0, arr.length - 1)
}

function permute (arr, begin, end) {
  if (begin === end) {
    console.log(arr)
  } else {
    for (let i = begin; i <= end; ++i) {
      swap(arr, begin, i)
      permute(arr, begin + 1, end)
      swap(arr, begin, i)
    }
  }
}

function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

permuteArray([1,2,3,4])