const Stack = require('./Stack')

// 3 peg
// A [ 1, 2, 3 ]
// B []
// C []

const A = Stack([1, 2, 3])
const B = Stack()
const C = Stack()

const resolveHanoi = ({ n, from, to, help }) => {
  for (let i = 0; i < n; ++i) {
    if (to.isEmpty()) {
      to.push(from.pop())
      continue
    }

    if (from.peek() > to.peek() && (from.peek() < help.peek() || help.isEmpty())) {
      help.push(from.pop())
      continue
    }

    if (from.peek() > to.peek() && from.peek() > help.peek()) {
      if (to.peek() < help.peek()) {
        help.push(to.pop())
        to.push(from.pop())
      }
    }
  }
}

// resolveHanoi({n: 3, from: A, to: C, help: B})
