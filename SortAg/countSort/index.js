function countSort (arr) {
  var hash = {}
  var countArr = []

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
    } else {
      hash[arr[i]]++
    }
  }

  for (let key in hash) {
    for (let i = 0; i < hash[key]; i++) {
      countArr.push(parseInt(key))
    }
  }

  return countArr
}
