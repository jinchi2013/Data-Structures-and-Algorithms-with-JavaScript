
function Queue () {
  const item = [...arguments]

  return {
    size: () => item.length,
    clear: () => { item.length = 0 },
    isEmpty: () => item.length === 0,
    enqueue: (i) => { item.push(i) },
    dequeue: () => item.shift(),
    peek: () => item[0],
    toString: () => item.toString()
  }
}
function Deque () {
  const item = [...arguments]

  return {
    size: () => item.length,
    clear: () => { item.length = 0 },
    isEmpty: () => item.length === 0,
    addFront: (i) => { item.unshift(i) },
    addBack: (i) => { item.push(i) },
    removeFront: () => item.shift(),
    removeBack: () => item.pop(),
    peekFront: () => item[0],
    peekBack: () => item[item.length - 1],
    toString: () => item.toString()
  }
}

module.exports = {
  Queue,
  Deque
}
