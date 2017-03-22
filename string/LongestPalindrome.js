/**
    Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

    This is case sensitive, for example "Aa" is not considered a palindrome here.

    Note:
    Assume the length of given string will not exceed 1,010.

    Example:

    Input:
    "abccccdd"

    Output:
    7

    Explanation:
    One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length === 0) return 0;
    
    var set = {};
    var count = 0;
    
    for(var i=0; i<s.length; i++) {
        if(set.hasOwnProperty(s.charAt(i))) {
            delete set[s.charAt(i)];
            count++;
        } else {
            set[s.charAt(i)] = s.charAt(i);
        }
    }
    
    if(Object.keys(set).length !== 0) return count*2+1;
    return count*2;
};