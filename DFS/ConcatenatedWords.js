/*
Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example 1:

Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
"dogcatsdog" can be concatenated by "dog", "cats" and "dog";
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

Example 2:

Input: words = ["cat","dog","catdog"]
Output: ["catdog"]

Constraints:

    1 <= words.length <= 104
    0 <= words[i].length <= 1000
    words[i] consists of only lowercase English letters.
    0 <= sum(words[i].length) <= 105

*/
/**
 * @param {string[]} words
 * @return {string[]}
 */

var findAllConcatenatedWordsInADict = function(words) {
  const set = new Set(words)

  function dfs (word) {
      for (let i = 1; i < word.length; ++i) { // this is very important, it prevent the case substring === words[i]
          const sub = word.substring(0, i)
          if (set.has(sub)) { // need a map to see if this substring exist in the words
              const restString = word.substring(i)
              if (set.has(restString) || dfs(restString)) {
                  return true
              }
          }
       }
  }

  const res = []
  for (let word of words) {
      if (dfs(word)) {
          res.push(word)
      }
  }

  return res
};

var VeryNewBilityCode = (words) => words.filter(dfs(new Set(words)))

const dfs = set => word => {
  for (let i = 1; i < word.length; ++i) {
    if (set.has(word.slice(0, i))) {
      const suffix = word.slice(i)
      return set.has(suffix) || dfs(set)(suffix)
    }
  }
}
