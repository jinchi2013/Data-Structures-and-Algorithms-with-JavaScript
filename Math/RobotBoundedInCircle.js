/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
  let x = 0
  let y = 0
  let direction = 0 // so initial direction is up

  for (const i of instructions) {
      if (i === 'L') {
          direction = (direction + 3) % 4
      }
      if (i === 'R') {
          direction = (direction + 1) % 4
      }

      if (i === 'G') {
          if (direction === 0) { y++ } // move up

          if (direction === 1) { x++ } // move right

          if (direction === 2) { y-- } // move down

          if (direction === 3) { x-- } // move left
      }
  }

  return x === 0 && y === 0 || direction !== 0 // as long as the robot doesn't face north
};
