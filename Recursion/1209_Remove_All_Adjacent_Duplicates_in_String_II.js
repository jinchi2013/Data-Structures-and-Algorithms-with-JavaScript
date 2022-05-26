/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// result in out of memory
// guessing pointer take a lot of memory
 var removeDuplicates = function(s, k) {
    var p1 = 0
    var p2 = 1
    var len = s.length
    
    if (s.length === 1) return s
    if (s.length < k) return s
    
    while (p2 < s.length) {
        if (s.charAt(p1) === s.charAt(p2)) {
            if (p2 - p1 === k - 1) {
                const left = s.slice(0, p1)
                let right = ''
                if (p2 + 1 < s.length) {
                    right = s.slice(p2+1)
                }
                s = left + right
                p1 = p2+1
                p2 += 2
            } else {
                p2++
            }
        } else {
            p1 = p2
            p2++
        }
    }
    
    if (s.length === len) return s
    
    return removeDuplicates(s, k)
}
