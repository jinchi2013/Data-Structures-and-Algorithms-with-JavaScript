/**
 * There are n cities numbered from 1 to n.

You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect city1 and city2 together.  (A connection is bidirectional: connecting city1 and city2 is the same as connecting city2 and city1.)

Return the minimum cost so that for every pair of cities, there exists a path of connections (possibly of length 1) that connects those two cities together.  The cost is the sum of the connection costs used. If the task is impossible, return -1.

Example 1:

Input: n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
Output: 6
Explanation:
Choosing any 2 edges will connect all cities so we choose the minimum 2.

Example 2:

Input: n = 4, connections = [[1,2,3],[3,4,4]]
Output: -1
Explanation:
There is no way to connect all cities even if all edges are used.
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
  // For Prim's Algorithm
  const adjList = new Map() // [c1, { c2, cost }]
  const parent = Array(n+1).fill(0)
  const inTree = Array(n+1).fill(false)
  const costs = Array(n+1).fill(Infinity)

  for (let i = 0; i < connections.length; i++) {
      const [c1, c2, cost] = connections[i]
      if (!adjList.has(c1)) {
          adjList.set(c1, [])
      }
      if (!adjList.has(c2)) {
          adjList.set(c2, [])
      }
      adjList.get(c1).push({
          city: c1,
          next: c2,
          cost
      })
      adjList.get(c2).push({
          city: c2,
          next: c1,
          cost
      })
  }

  let result = 0
  let city = adjList.keys().next().value
  while(inTree[city] === false) {
      n--
      inTree[city] = true
      const adjVertices = adjList.get(city)
      for (let i = 0; adjVertices && i < adjVertices.length; ++i) {
          const {next, cost} = adjVertices[i]
          if (inTree[next] === false && costs[next] > cost) {
              costs[next] = cost
              parent[next] = city
          }
      }

      let min = Infinity
      for (let j = 1; j < inTree.length; j++) {
          if (inTree[j] === false && min > costs[j]) {
              min = costs[j]
              city = j
          }
      }
      if (min !== Infinity) {
          result += min
      }
  }

  return n === 0 ? result : -1
};
