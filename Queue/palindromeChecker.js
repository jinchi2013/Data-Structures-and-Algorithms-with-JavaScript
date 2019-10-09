const { Deque } = require('./Queue')

function palindromeChecker (str) {
  const strDq = Deque(...Array.from(str.toLowerCase().replace(/[^a-zA-Z]/g, '')))
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
console.log(palindromeChecker('abca')) // false
console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
