/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(m) {
  const l = m.length
  const visited = Array(l).fill(0)
  /**
   * Use a visited array to record visited cityId,
   * if a city has been visited before, it means it belongs to a province already. Already connected to others
   */
  let count = 0

  function findProvince(city) {
      for (let i = 0; i < m[city].length; ++i) {
          if (i === city ) continue
          if (m[city][i] === 1 && visited[i] === 0) {
              visited[i] = 1
              findProvince(i)
          }
      }
  }

  for (let i = 0; i < l; ++i) {
      if (visited[i] === 0) {
          visited[i] = 1
          findProvince(i)
          ++count
      }
  }

  return count

};