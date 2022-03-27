var generateParenthesis = function(n) {
  var set = new Set()
  function backtrack (open, close, curr) {
      if (curr.length === n * 2) {
          set.add(curr)
          return
      }
      
      if (open < n) { // as open count is smaller
          curr += '(' // we add '(' to current string
          backtrack(open+1, close, curr)

          // remove the last parenthesis in current string
          curr = curr.substring(0, curr.length-1)
      }
      if (close < open) {
          curr += ')'
          backtrack(open, close+1, curr)
          curr = curr.substring(0, curr.length-1)
      }
  }
  
  backtrack(
    0, // open  ( count
    0, // close ) count
    '' // current string
  )
  return Array.from(set) 
}
