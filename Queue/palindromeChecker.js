const { Deque } = require('./Queue')

function palindromeChecker (str) {
  const strDq = Deque(Array.from(str))
  while (!strDq.isEmpty()) {
    if (strDq.peekFront() === strDq.peekBack()) {
      if (strDq.size() === 1) {
        return true
      }
      strDq.removeBack()
      strDq.removeFront()
    } else {
      return false
    }
  }

  return true
}

console.log(palindromeChecker('abba')) // true
console.log(palindromeChecker('aba')) // true
