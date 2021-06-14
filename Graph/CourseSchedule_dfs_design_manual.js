/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that
 * you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1.
So it is impossible.

Constraints:

    1 <= numCourses <= 105
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.

 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjacencyList = prerequisites.reduce((cm, pr) => {
        const [cId, prCId] = pr
        if (cm.has(cId)) {
            cm.set(cId, [...cm.get(cId), prCId])
        } else {
            cm.set(cId, [prCId])
        }
        return cm
    }, new Map())

    var discovered = Array(numCourses).fill(false)
    var parent = Array(numCourses).fill(null)
    var terminated = false
    var hasCycle = false

    function dfs (v) {
        if (terminated) return
        discovered[v] = true
        var adjList = adjacencyList.get(v)
        for (let i = 0; adjList && i < adjList.length; ++i) {
            var adjValue = adjList[i]
            if (!discovered[adjValue]) {
                parent[adjValue] = v
                discovered[adjValue] = true
                processEdge(v, adjValue)
                dfs(adjValue)
            } else {
                // This key step to find the cycle/loop
                processEdge(v, adjValue)
            }
        }
    }

    function processEdge (parentValue, value) {
        if (parent[value] !== parentValue) {
            terminated = true
            // TODO: print the loop path
            // printPath(parentValue, value)
            hasCycle = true
        }
    }

    dfs(0)

    return hasCycle
}
