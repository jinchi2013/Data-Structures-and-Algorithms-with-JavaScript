/*
  finding the longest common substring in two strings. 
  For example, in the words “raven” and “havoc,” 
  the longest common substring is “av.” 
  A common use of finding the longest common substring is in genetics,
  where DNA molecules are described using the first letter of the nucleobase of a nucleotid
*/

/*
  a b c d e
a 1 0 0 0 0
s 0 0 0 0 0
c 0 0 1 0 0
d 0 0 0 2 0
e 0 0 0 0 3
f 0 0 0 0 0
g 0 0 0 0 0

*/

function longest_common_substring(w1, w2) {
  var result = Array(w1.length)
  var endIndex = null
  var maxLength = 0
  for (let i = 0; i < w1.length; ++i) {
    result[i] = Array(w2.length).fill(0)
    for(let j = 0; j < w2.length; ++j) {
      if (w1[i] === w2[j]) {
        if (i === 0 || j === 0) {
          result[i][j] = 1
        } else {
          result[i][j] = result[i-1][j-1] + 1
        }

        if (result[i][j] > maxLength) {
          maxLength = result[i][j]
          endIndex = i
        }
      }
    }
  }

  return {
    endIndex,
    maxLength,
    lcs: maxLength !== 0
      ? w1.substring(endIndex - maxLength + 1, endIndex+1)
      : null
  }
}

console.log(longest_common_substring('12334', '33'))
