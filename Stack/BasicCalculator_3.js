/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:

Input: s = "1+1"
Output: 2

Example 2:

Input: s = "6-4/2"
Output: 4

Example 3:

Input: s = "2*(5+5*2)/3+(6/2+8)"
Output: 21

Example 4:

Input: s = "(2+6*3+5-(3*14/7+2)*5)+3"
Output: -12

Example 5:

Input: s = "0"
Output: 0

Constraints:
    1 <= s <= 104
    s consists of digits, '+', '-', '*', '/', '(', and ')'.
    s is a valid expression.
*/

/**
 * @param {string} s
 * @return {number}
 */
const { isDigit } = require('./helper')
let index = 0 // index as point to loop record the position of the char
var calculate = function(s) {
  const n = s.length
  let num = 0 // current number
  let lastOperator = '+'
  const stack = []

  while (index < n) {
    if (s.charAt(index) === '(') {
      index++
      num = calculate(s) // recurrsively handle the content of  "(" and ")"
    }

    while (index < n && isDigit(s.charAt(index))) {
      num = num * 10 + Number(s.charAt(index))
      ++index
    }

    if (lastOperator ===  '+') {
      stack.push(num)
    } else if (lastOperator === '-') {
      stack.push(0 - num)
    } else if (lastOperator === '*') {
      stack.push(stack.pop() * num)
    } else if (lastOperator === '/') {
      stack.push(Math.trunc(stack.pop() / num))
    }
    num = 0
    if (index >= n) break
    if (s.charAt(index) != ')') {
      lastOperator = s.charAt(index++) // renew lastOperator with current Index
      continue
    } else if (s.charAt(index) === ')') { // finish handle the "(" and ")"
      index++
      break
    }
  }

  return stack.reduce((sum, n) => {
    sum += n
    return sum
  }, 0)
}
