/**
 * Two string like s1, s2
 * 'aaaa' 'aa' => 'aa'
 * 
 * 'ABCSJUW' 'SJWNA' => 'SJW'
 * 'ABCSJUW' 'CCSOUOW' => 'CSUW'
 */

function solution (s1, s2) {
  let short = s1.length >= s2.length ? s2 : s1
  let long = s1.length < s2.length ? s2 : s1
  let start = 0
  let temp = ''
  let result = ''

  for (let i = 0; i < short.length ; ++i) {
    const cur = short.charAt(i)
    let loop = start
    let found = false
    while(loop < long.length) {
      if (long.charAt(loop) === cur) {
        found = true
        temp += cur
        if (loop !== long.length - 1) {
          start = loop + 1
        }

        if (temp.length > result.length) {
          result = temp
        }

      }

      if (loop === long.length - 1 && found) {
        temp = ''
      }

      if (found) break
      ++loop
    }
  }

  return result
}

console.log(solution('ABCSJUW', 'SJWNA'))
console.log(solution('ABCSJUW', 'CCSOUOW'))
console.log(solution('aaaa', 'aa'))

// Breaking case
console.log(solution('ABCSJUWSJA', 'USJWNASJA'))