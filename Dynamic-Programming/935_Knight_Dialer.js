/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const kmod = 1e9 + 7
    let cell_1 = 1
    let cell_2 = 1
    let cell_3 = 1
    let cell_4 = 1
    let cell_5 = 1
    let cell_6 = 1
    let cell_7 = 1
    let cell_8 = 1
    let cell_9 = 1
    let cell_0 = 1
    
    if ( n===1 ) {
        return 10
    }

    for (let i = 2; i <= n; i++) {
        // save previous result
        let c_1 = cell_1
        let c_2 = cell_2
        let c_3 = cell_3
        let c_4 = cell_4
        let c_5 = cell_5
        let c_6 = cell_6
        let c_7 = cell_7
        let c_8 = cell_8
        let c_9 = cell_9
        let c_0 = cell_0

        cell_1 = (c_6 + c_8) % kmod
        cell_2 = (c_7 + c_9) % kmod
        cell_3 = (c_4 + c_8) % kmod
        cell_4 = (c_3 + c_9 + c_0) % kmod
        cell_5 = 0
        cell_6 = (c_1 + c_7 + c_0) % kmod
        cell_7 = (c_2 + c_6) % kmod
        cell_8 = (c_1 + c_3) % kmod
        cell_9 = (c_2 + c_4) % kmod
        cell_0 = (c_4 + c_6) % kmod
    }

    return (cell_1+cell_2+cell_3+cell_4+cell_5+cell_6+cell_7+cell_8+cell_9+cell_0) % kmod
};