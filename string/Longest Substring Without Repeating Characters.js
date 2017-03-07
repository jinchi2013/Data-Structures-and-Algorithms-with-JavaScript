/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.



 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var set = {};
    var i = 0; // pointer one
    var j = 0; // pointer two
    var result = 0;
    var length = s.length;

    while(j < s.length && i < s.length) {
		if(!set.hasOwnProperty(s.charAt(j))) {
			set[s.charAt(j)] = 1;
			++j;
			result = Math.max(result, j-i);
		} else {
			delete set[s.charAt(i)];
			++i;
		}
    }

    return result;
    
}