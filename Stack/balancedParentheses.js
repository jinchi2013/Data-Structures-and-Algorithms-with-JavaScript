const Stack = require('./Stack')

const balancedParentheses = str => {
  const checker = Stack()
  for (let char of Array.from(str)) {
    if (char === '[' || char === '(' || char === '{') {
      checker.push(char)
    } else if ((checker.peek() === '[' && char === ']') || (checker.peek() === '{' && char === '}') || (checker.peek() === '(' && char === ')')) {
      checker.pop()
    } else {
      return false
    }
  }

  return true
}

console.log(balancedParentheses('[()]{}{[()()]()}')) // => true
console.log(balancedParentheses('[(])')) // => false
