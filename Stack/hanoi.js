const Stack = require('./Stack')

var solveHanoi = function(numDisks, fromPeg, toPeg, helper) {
  if (numDisks === 0) return
  if (numDisks === 1) {
    toPeg.push(fromPeg.pop())
  } else {
    solveHanoi(numDisks - 1, fromPeg, helper, toPeg)
    toPeg.push(fromPeg.pop())
    solveHanoi(numDisks - 1, helper, toPeg, fromPeg)
  }
};

// (function () {
//   const a = Stack(3, 2, 1)
//   const b = Stack()
//   const c = Stack()
//   solveHanoi(3, a, c, b)
//   console.log('a: ', a.toString())
//   console.log('b: ', b.toString())
//   console.log('c: ', c.toString())
// })()

(function () {
  const a = Stack(5, 4, 3, 2, 1)
  const b = Stack()
  const c = Stack()
  solveHanoi(5, a, c, b)
  console.log('a: ', a.toString())
  console.log('b: ', b.toString())
  console.log('c: ', c.toString())
})()
