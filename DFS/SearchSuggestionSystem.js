/*
Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

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
var suggestedProducts = function (products, searchWord) {
  const searchTree = buildTrieSearchTree(products)

  function search (prefix) {
    // base on a Trie Tree
    let pointer = searchTree
    for (let char of prefix) {
      if (pointer.children.has(char)) {
        pointer = pointer.children.get(char)
      } else {
        return []
      }
    }

    return startDFS(pointer, prefix.join(''), [])
  }

  const prefix = []
  const result = []
  for (let char of searchWord) {
    prefix.push(char)
    const suggestions = search(prefix)
    suggestions.sort((a, b) => a.localeCompare(b))
    if (suggestions.length > 3) {
      result.push(suggestions.slice(0, 3))
    } else {
      result.push(suggestions)
    }
  }

  return result
}

function Node (v) {
  return {
    value: v || null,
    children: new Map(),
    isWord: false
  }
}
/*
  Build a Trie search tree
    m
    o
    b u n
    i
    l
    e -> we want to know this is end of a word

    Node {
      value: 'm',
      children: Map<Node>,
      isWord: false
    }
    Node {
      value: 'e',
      children: Map<Node>, //empty
      isWord: True
    }
*/
function buildTrieSearchTree (products) {
  let root = Node()
  let pointer = root // as we create the node, this pointer will always point to the new node so we can add new char to its Map
  for (const p of products) {
    for (const char of p) {
      // to see if the children has current char
      if (!pointer.children.has(char)) {
        pointer.children.set(char, Node(char))
      }
      pointer = pointer.children.get(char)
    }

    pointer.isWord = true
    pointer = root
  }

  return root
}

function startDFS (node, prefix, suggestions) {
  // check the bottom case
  if (node.isWord) {
    suggestions.push(prefix)
  }

  for (let n of node.children) {
    const { value } = n
    startDFS(node.children.get(value), prefix+value, suggestions)
  }

  return suggestions
}
