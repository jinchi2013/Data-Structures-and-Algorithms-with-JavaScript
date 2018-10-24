// return the nth largest number from given array, don't sort


function solution(arr, n) {
  let max = Math.max.apply(null, arr)
  let rest = arr.filter(num => num !== max)
  while (n-1 > 0) {
    max = Math.max.apply(null, rest)
    rest = rest.filter(num => num != max)
    n--
  }
  console.log(max)
  return max
}

solution([1,3,4,3,7,32,10,99], 2) // => 32
