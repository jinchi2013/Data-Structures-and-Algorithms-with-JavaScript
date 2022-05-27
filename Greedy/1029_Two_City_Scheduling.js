/**
 * @param {number[][]} costs
 * @return {number}
 * Greedy algorithms

    Greedy problems usually look like 
    "Find minimum number of something to do something" or 
    "Find maximum number of something to fit in some conditions",
    and typically propose an unsorted input.

    The idea of greedy algorithm is to pick the locally optimal move at each step, 
    that will lead to the globally optimal solution.
    - Let's figure out how to sort the input (costs = [[10,20],[30,200],[400,50],[30,20]]) here. 
    - The input should be sorted by a parameter which indicates a money lost for the company.
    - So let's sent all persons to A city, what would be impact on the cost comparing with sending to B
    - person_0, 10 - 20, -10, company saves 10
    - person_1, 30 - 200, -170 company saves 170
    - person_2, 400 - 50, 350, company wastes 350
    - person_3, 30 - 20, company wastes 10
    - [-10, -170, 350, 10]
    - so the above
    - [-170, -10, 10, 350]
    - so we can tell as long as company is saving money
    - we should sent the person to city A
    - otherwise if company wastes money on city A, we should send the person to city B

 */
 var twoCitySchedCost = function(costs) {
    costs.sort((c1, c2) => {
        const [c1a, c1b] = c1
        const [c2a, c2b] = c2
        return c1a - c1b - (c2a - c2b)
    })
    
    let result = 0
    const n = costs.length / 2
    for (let i = 0; i < n; i++) {
        result += costs[i][0] + costs[i+n][1]
    }
    
    return result
}
