/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */

 var cleanRoom = function(robot) {
  var cleaned = {} // ['x-y']: true
  var direction = [
      [0,1], // up -> robot face up at the beginning
      [1,0], // right -> turn right would face right
      [0,-1], // down -> turn right again, would face down
      [-1,0] // left -> turn right again, would face left
  ]
  // so, we only turn right in the whole process

  // goback function
  function goBack () {
      // two right turn, make it turn back (180 degree)
      robot.turnRight()
      robot.turnRight()
      robot.move()
      // another tow right turn, make it return to its original facing direction
      robot.turnRight()
      robot.turnRight()
  }

  function backtrack(x,y,d) {
      // Mark current position as cleaned
      cleaned[`${x}-${y}`] = true
      robot.clean()
      // at this point
      // there are 4 options, go up, go right, go down, go left
      // so iterate each option
      for (let i=0; i<4; i++) {
          // determine the new direction
          var nd = (d+i) % 4
          var nx = direction[nd][0] + x
          var ny = direction[nd][1] + y
          // if new x,y is not cleaned, and good to go
          if (!Boolean(cleaned[`${nx}-${ny}`]) && robot.move()) {
              // move to the new position, new direction
              backtrack(nx, ny, nd)

              // when finish the last possible move
              // we need to move the robot back to its previous position to start exploring the rest of directions
              goBack()
          }

          // if it is obstacle in the front
          // we turn right
          robot.turnRight()
      }
  }

  backtrack(
      0, // start from 0,0
      0, // start from 0,0
      0  // Use 0 to start since initially facing up
  )
};
