/**
 * @param {string} s
 * @return {string}
 */

// Stack version
var decodeString = function(s) {
    let stack = []
    // traverse through s 
    for (let char of s) {
        if (char !== ']') {
            stack.push(char)
        } else {
            // store the character until '[' is found
            let currChar = stack.pop()
            let num = ''
            let str = ''
            while (currChar !== '[') {
                // store the characters into the string
                str = currChar + str
                // move the currChar pointer
                currChar = stack.pop()
            }
            // if a '[' is found, then next item in the list will be a numerical value
            currChar = stack.pop()
            // check if the next value is a numerical value
            while (!Number.isNaN(Number(currChar))) {
                num = currChar + num
                currChar = stack.pop()
            }
            // now we add to stack and repeat str num times 
            stack.push(currChar)
            stack.push(str.repeat(Number(num)))
        }
    }
    // return the stack fully joined
    return stack.join("")
}

// Recurrsion version
var decodeString_recurrsion = function(s) {
    const len = s.length
    const isDigits = /\d/
    
    // Start -> start bracket index
    // End -> end bracket index
    // return the 
    function helper (start, end) {
        let result = ''
        let i = start
        while (i <= end) {
            if (isDigits.test(s.charAt(i))) {
                let digitsEnd = i
                while (isDigits.test(s.charAt(digitsEnd))) {
                    digitsEnd++
                }
                let digits = Number(s.substring(i, digitsEnd))
                
                const arr = ['[']
                
                const startBracket = digitsEnd
                let endBracket = digitsEnd + 2
                while(arr.length !== 0) {
                    if (s.charAt(endBracket) === '[') {
                        arr.push('[')
                    } else if (s.charAt(endBracket) === ']') {
                        arr.pop()
                    }
                    endBracket++
                }
                
                while (digits !== 0) {
                    result += helper(startBracket+1, endBracket-2)
                    digits--
                }
                
                i = endBracket
            } else {
                result += s.charAt(i)
                i++
            }
        }
        
        return result
        
    }
    
    return helper(0, len-1)
};
