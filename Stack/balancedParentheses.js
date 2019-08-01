const Stack = require('./Stack')

const balancedParentheses = str => {
  const checker = Stack()
  let result
  Array.from(str).forEach( char => {
    if (char === '[' || char === '(' || char === '{') {
      checker.push(char)
      console.log(checker.toString())
    }
    if (char === ']' || char === ')' || char === '}') {
      if (checker.peek() === char) {
        checker.pop()
      } else {
        result = false
        return false
      }
    }
    result = true
  })

  return result
}

console.log(balancedParentheses('[()]{}{[()()]()}')) // => true
console.log(balancedParentheses('[(])')) // => false
