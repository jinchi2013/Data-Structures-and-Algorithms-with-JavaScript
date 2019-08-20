/**
 * In recursion, there must be a base case (also referred to as terminating case).
 * Because recursive methods call themselves,
 * they will never stop unless this base case is reached.
 * Stack overflow from recursion is most likely the result of not having a proper base case.
 * In the base case, there are no recursive function calls.
 */

function countDownToZero (n) {
  if (n < 0) {
    return
  } else {
    console.log(n)
    countDownToZero(n - 1)
  }
}

function getNthFiboIterate (n) {
  if (n <= 0) return
  if (n === 1) return n

  let prev = 1
  let now = 1
  let next

  for (let i = 3; i <= n; ++i) {
    next = prev + now
    prev = now
    now = next
  }

  return next
}

// console.log('Iterate', getNthFiboIterate(4))
// console.log('Iterate', getNthFiboIterate(5))
// console.log('Iterate', getNthFiboIterate(6))
// console.log('Iterate', getNthFiboIterate(7))

function getNthFibo (n) {
  if (n <= 1) return n
  return getNthFibo(n - 1) + getNthFibo(n - 2)
}


// console.log('Recur', getNthFibo(1))
// console.log('Recur', getNthFibo(2))
// console.log('Recur', getNthFibo(3))
// console.log('Recur', getNthFibo(4))
// console.log('Recur', getNthFibo(5))
// console.log('Recur', getNthFibo(6))
// console.log('Recur', getNthFibo(7))

function getPascalTri (n) {
  let result = []
  function PascalTri (n) {
    if (n <= 0) {
      result[0] = [1]
    } else {
      let row = []
      let prev = result[n - 1]
      for (let i = 0; i<= n; ++i) {
        let v = prev[i - 1] || 0
        let n = prev[i] || 0
        row[i] = n + v
      }
      result[n] = row
    }
  }

  for (let i = 0; i <= n; ++ i) {
    PascalTri(i)
  }

  return result
}

// console.log('getPascalTri', getPascalTri(3))

function getPascalTriRecur (row, col) {
  if (col === 0) {
    return 1
  } else if (row === 0) {
    return 0
  }
  const result = getPascalTriRecur(row - 1, col - 1) + getPascalTriRecur(row - 1, col)
  console.log(result)
  return result
}

console.log('getPascalTriRecur: ', getPascalTriRecur(5, 2))



