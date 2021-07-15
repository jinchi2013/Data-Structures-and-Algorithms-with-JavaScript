function mergeSort (arr, low, high) {
  if (low < high) {
    const middle = Math.floor((low+high)/2)
    mergeSort(arr, low, middle)
    mergeSort(arr, middle+1, high)
    merge(arr, low, middle, high)
  }
}

function merge(arr, low, middle, high) {
  const q1 = []
  const q2 = []

  for (let i = low; i < middle; ++i) {
    q1.push(arr[i])
  }

  for (let j = middle; j < high; ++j) {
    q2.push(arr[j])
  }

  let k = low
  while(q1.length !== 0 && q2.length !== 0) {
    if (q1[0] < q2[0]) {
      arr[k++] = q1.shift()
    } else {
      arr[k++] = q2.shift()
    }
  }

  while (q1.length !== 0) {
    arr[k++] = q1.shift()
  }
  while (q2.length !== 0) {
    arr[k++] = q2.shift()
  }
}