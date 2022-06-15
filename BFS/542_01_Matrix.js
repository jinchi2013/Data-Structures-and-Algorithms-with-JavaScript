/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = []
    const R = mat.length
    const C = mat[0].length
    
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j,0])
            } else {
                mat[i][j] = Infinity
            }
        }    
    }
    
    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    
    while(queue.length !== 0) {
        const [r, c, path] = queue.shift()
        
        mat[r][c] = Math.min(mat[r][c], path)
        
        for (let i = 0; i < directions.length; i++) {
            const [xi, yi] = directions[i]
            
            const x = r + xi
            const y = c + yi
            
            if (x < 0 || y < 0 || x === R || y === C || mat[x][y] !== Infinity) {
                continue
            }
            
            queue.push([x,y,path+1])
        }
    }
    
    return mat
}
