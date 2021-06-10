/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return the ordering of courses you should take to finish all courses. 
If there are many valid answers, return any of them. 
If it is impossible to finish all courses, return an empty array.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]

Constraints:

    1 <= numCourses <= 2000
    0 <= prerequisites.length <= numCourses * (numCourses - 1)
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    ai != bi
    All the pairs [ai, bi] are distinct.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function(numCourses, prerequisites) {
    /*
        Use kahn's algorithiums
        to find the Topological Ordering of the courses
        
        create an array of incoming degree
        create a queue
        handle points with same incoming degress by BFS
    */
    /*
        numCourses: 4
        prerequisites: [[1,0],[2,0],[3,1],[3,2]]
    */
    // create adjacent list for the courses
    const adjList = prerequisites.reduce((ls, prereq) => {
        const [crs, preCrs] = prereq
        if (typeof ls[crs] !== 'undefined') {
            ls[crs].push(preCrs)
        } else {
            ls[crs] = [preCrs]
        }
        return ls
    }, [...Array(numCourses)]) // [undefined,[0],[0],[1,2]]
    
    
    // queue to always hande points with zero incoming degree
    var queue = []
    
    // push all courses with zero incoming degree into queue
    for (let i = 0; i < adjList.length; ++i) {
        if (!adjList[i]) {
            queue.push(i)
        }
    }

    if (queue.length === 0) {
        return []
    }

    const result = []
    let courseLeft = numCourses

    // As long as queue is not empty, we will need to look at adjList, the remove the courses in queue from adjList
    while (queue.length !== 0) {
        const curCrs = queue.shift() // get first course in queue
        result.push(curCrs) // push course to result
        --courseLeft // since 1 course is finished, reduce 1 from courseLeft
        for (let j = 0; j < adjList.length; ++j) {
            if (adjList[j] && adjList[j].includes(curCrs)) {
                adjList[j] = adjList[j].filter(crs => crs !== curCrs) // remove current course from course j's prerequsites
                if (adjList[j].length === 0) { // if course j's prerequsites is empty
                    adjList[j] = undefined // mark it as undefined
                    queue.push(j) // push course j to the queue
                }
            }
        }
    }

    if (courseLeft === 0) {
        return result
    }

    return []
};
