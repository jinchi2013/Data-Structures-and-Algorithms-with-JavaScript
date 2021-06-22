/**
 * Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:

Input: s = "3+2*2"
Output: 7

Example 2:

Input: s = " 3/2 "
Output: 1

Example 3:

Input: s = " 3+5 / 2 "
Output: 5

Constraints:
    1 <= s.length <= 3 * 105
    s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
    s represents a valid expression.
    All the integers in the expression are non-negative integers in the range [0, 231 - 1].
    The answer is guaranteed to fit in a 32-bit integer.
 */
/**
 * @param {string} s
 * @return {number}
 */

/**
 * test cases like '30*1 + 2 /10 '
 * 1. start the handle + / - only when current char is not digit
 * 2. need specical care about the trail space, which needs to be handled as "operator" instead of just ignoring
 * 3. Use Math.trunc to get just the integer part from the digit
 */

 var calculate = function(s) {
  let cn = 0
  let operator = '+'
  const stack = []

  for (let i = 0; i < s.length; ++i) {
      const ccr = s.charAt(i)
      if (ccr === ' ' && i !== s.length-1) continue
      if (ccr !== ' ' && isDigits(ccr)) {
          cn = cn * 10 + Number(ccr)
      }

      if (!isDigits(ccr) || i === s.length - 1) {
          switch (operator) {
              case '+':
                  stack.push(cn)
                  break
              case '-':
                  stack.push(0 - cn)
                  break
              case '*':
                  stack.push(cn * stack.pop())
                  break
              case '/':
                  stack.push(Math.trunc(stack.pop() / cn))
                  break
          }
          operator = ccr
          cn = 0
      }
  }

  function isDigits (v) {
      return !isNaN(Number(v))
  }

  return stack.reduce((sum, n) => {
      sum += n
      return sum
  }, 0)
};
