/**
 * Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed.

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]

Constraints:

    1 <= products.length <= 1000
    There are no repeated elements in products.
    1 <= Σ products[i].length <= 2 * 10^4
    All characters of products[i] are lower-case English letters.
    1 <= searchWord.length <= 1000
    All characters of searchWord are lower-case English letters.
*/


/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

function Node () {
  return {
      isWord: false,
      next: new Map() // Record<char, Node>
  }
}

var suggestedProducts = function(products, searchWord) {
  const root = Node()
  let curr = root

  for (const word of products) {
      for (const c of word) {
          if (!curr.next.has(c)) {
              curr.next.set(c, Node())
          }
          curr = curr.next.get(c)
      }
      curr.isWord = true
      curr = root
  }

  let suggestions = []

  function searchPrefix(prefix) {
      curr = root
      suggestions = []
      for (const p of prefix) {
          // update curr, make sure curr point the correct char Node
          if (curr.next.has(p)) {
              curr = curr.next.get(p)
          } else {
              return suggestions
          }
      }

      dfs(curr, prefix.join(''))
      return suggestions
  }

  function dfs(node, word) {
      if (node.isWord) {
          suggestions.push(word)
      }

      for (const [char, n] of node.next.entries()) {
          dfs(n, word+char)
      }
  }

  let prefix = []
  const result = []

  for (const c of searchWord) {
      prefix.push(c)
      const searchResult = searchPrefix(prefix)
      if (searchResult.length > 3) {
          searchResult.sort(ascendOrder)
          result.push(searchResult.slice(0, 3))
      } else {
          result.push(searchResult.sort(ascendOrder))
      }
  }
  return result
};

function ascendOrder (a, b) {
  if (a < b) {
    return -1 // sort a before b
  }
  if (a > b) {
      return 1 // sort b before a
  }
  return 0 // keep current
}
