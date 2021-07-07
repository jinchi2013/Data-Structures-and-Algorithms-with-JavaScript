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
    let parents = [], res = 0;
    for (let i = 0; i <= n; i++) parents.push(i);
    connections.sort((a, b) => a[2] - b[2]);
    for (let [from, to, cost] of connections) {
        // FIND the parent nodes of the cities;
        let parentFrom = find(from);
        let parentTo = find(to);
        // prevent union in same groups (loop)
        if (parentFrom != parentTo) {
            res += cost;
            // Merge component
            parents[parentFrom] = parentTo;
            n--;
        }
    }

    function find(city) {
        if (city == parents[city]) return city;
        return find(parents[city]);
    }
    return n == 1 ? res : -1;
};
