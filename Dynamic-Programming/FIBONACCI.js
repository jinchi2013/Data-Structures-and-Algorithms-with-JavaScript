// Recurrsive solution
function recurFib (n) {
  if (n < 2) {
    return n
  }

  return recurFib(n-1) + recurFib(n-2)
}

// Dynamic Programming solution
function dpFib (n) {
  let result = Array(n).fill(0)

  if (n < 3) {
    return n
  } else {
    result[1] = 1
    result[2] = 2
    for(let i = 3; i < n; i++) {
      result[i] = result[i-1] + result[i-2]
    }
  }

  return {
    fibArray: result,
    result: result[result.length-1]
  }
}
