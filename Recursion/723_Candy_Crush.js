/**
 * @param {number[][]} board
 * @return {number[][]}
 */
 var candyCrush = function(board) {
    const Row = board.length
    const Col = board[0].length
    
    function crush () {
        let boardChanged = false
        // crush along the row (vertically)
        for (let r = 0; r < Row - 2; r++) {
            for (let c = 0; c < Col; c++) {
                const curVal = Math.abs(board[r][c])
                if (board[r][c] !== 0 && Math.abs(board[r][c]) === Math.abs(board[r+1][c]) && curVal === Math.abs(board[r+2][c])) {
                    boardChanged = true
                    board[r][c] = -curVal
                    board[r+1][c] = -curVal
                    board[r+2][c] = -curVal
                }
            }
        }
        
        // crush along the col (horizontal)
        for (let c = 0; c < Col - 2; c++) {
            for (let r = 0; r < Row; r++) {
                const curVal = Math.abs(board[r][c])
                if (board[r][c] !== 0 && Math.abs(board[r][c]) === Math.abs(board[r][c+1]) && curVal === Math.abs(board[r][c+2])) {
                    boardChanged = true
                    board[r][c] = -curVal
                    board[r][c+1] = -curVal
                    board[r][c+2] = -curVal
                }
            }
        }

        return boardChanged
    }
    
    function drop () {
        for (let c = 0; c < Col; c++) {
            // Two pointers to this colume
            let p1 = Row-1
            let p2 = p1
            while (p2 >= 0) {
                if (board[p2][c] > 0) {
                    board[p1][c] = board[p2][c]
                    p1--
                }
                p2--
            }
            
            while (p1 >= 0) {
                board[p1][c] = 0
                p1--
            }
        }
    }
    
    while (crush()) {
        drop()
    }
    
    return board
};
