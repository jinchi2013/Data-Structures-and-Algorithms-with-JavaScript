/*
Smallest Difference pair of values between two unsorted Arrays
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

Examples :

Input : A[] = {1, 3, 15, 11, 2}
        B[] = {23, 127, 235, 19, 8}
Output : 3
That is, the pair (11, 8)

Input : A[] = {l0, 5, 40}
        B[] = {50, 90, 80}
Output : 10
That is, the pair (40, 50)
*/


function smallestDifferenceBetween2Array(arr1, arr2) {

  if (arr1.length === 0 || arr2.length === 0) return null

  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  let i = 0
  let j = 0
  let result = null

  while (i < arr1.length - 1 && j < arr2.length - 1) {

    let diff = Math.abs(arr1[i] - arr2[j])

    if (!result || diff < result) {
      result = diff
    }

    if (arr1[i] < arr2[j]) {
      i++
    } else {
      j++
    }
  }

  console.log(result)

  return result
}

smallestDifferenceBetween2Array([1, 3, 15, 2], [23, 127, 235, 19, 8])
