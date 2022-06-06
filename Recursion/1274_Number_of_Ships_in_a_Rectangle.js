/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
 var countShips = function(sea, topRight, bottomLeft) {
    let total = 0
    
    function divideAndCouquer (topRight, bottomLeft) {
        const [xt, yt] = topRight
        const [xb, yb] = bottomLeft
        
        if (xb > xt || yb > yt) {
            return
        }
        
        // Conquer
        if (!sea.hasShips(topRight, bottomLeft)) {
            return
        }

        // topRight and bottomLeft is the same point
        if (xt === xb && yt === yb) {
            total++
            return
        }
        // Conquer End
        
        
        // divide into 4 area
        const xm = Math.floor((xt + xb)/2)
        const ym = Math.floor((yt + yb)/2)
        // bottom left area
        divideAndCouquer([xm, ym], bottomLeft)
        // Top right area
        divideAndCouquer(topRight, [xm+1, ym+1])
        // Top left area
        divideAndCouquer([xm, yt], [xb, ym+1])
        // Bottom right area
        divideAndCouquer([xt, ym], [xm+1, yb])
    }
    
    divideAndCouquer(topRight, bottomLeft)
    
    return total
    
};