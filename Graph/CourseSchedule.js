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
  const courseMap = prerequisites.reduce((cm, pr) => {
      const [cId, prCId] = pr
      if (cm.has(cId)) {
          cm.set(cId, [...cm.get(cId), prCId])
      } else {
          cm.set(cId, [prCId])
      }
      return cm
  }, new Map())

  // Use visited array to record path that has been verified
  /*
      for example
      {
          0: [1],
          1: [2, 4],
          2: [3],
          3: [5],
          4: [2]
      }
      in first path it would be 0 -> 1 -> 4 ->2 -> 3 -> 5, so there is no loop
      so stack will keep pop till 0 -> 1
      and it will choose 2 as next liek 0->1->2
      so we can know the path started with 2 has already been verified it is 2->3->5 w/n loop
      so as long as there is not other point refer to 2 in the stack
      we can say there is no loop for the path
  */
  const visited = new Set();
  // Use a stack to keep track the path of current graph
  const hasCycle = (i, stack = []) => {
      if (visited.has(i)) {
          if (stack.includes(i)) {
              return true;
          }
          return false;
      }
      visited.add(i);
      stack.push(i);

      const adjList = courseMap.get(i) || [];
      for (let i = 0; i < adjList.length; i += 1) {
          if (hasCycle(adjList[i], stack)) return true;
      }
      stack.pop();
      return false;
  }
  for (let i = 0; i < numCourses; i += 1) {
      if (hasCycle(i)) {
          return false;
      }
  }
  return true;

};
