function Node (e) {
  this.element = e
  this.next = null
}

function defaultEquals (a, b) {
  return a === b
}

function LinkedList (eF = defaultEquals) {
  this.count = 0
  this.head
  this.equalsFn = eF

  return this
}

LinkedList.prototype.push = function (e) {
  const node = new Node(e)
  let current = this.head
  if (!this.head) {
    this.head = node
  } else {
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  ++this.count
}

LinkedList.prototype.removeAt = function (index) {
  if (index === 0) {
    this.head = this.head.next
  } else {
    let prev = this.getElementAt(index - 1)
    let cur = prev.next
    prev.next = cur.next
  }

  --this.count
  return this.head
}

LinkedList.prototype.getElementAt = function (index) {
  if (index >= 0 && index <= this.count) {
    let cur = this.head
    for (let i = 0; i < index && cur !== null; ++i) {
      cur = cur.next
    }

    return cur
  }

  return null
}

LinkedList.prototype.insert = function (e, i) {
  if (i >= 0 && i <= this.count) {
    if (i === 0) {
      const node = new Node(e)
      node.next = this.head
      this.head = node
    } else {
      const node = new Node(e)
      let prev = this.getElementAt(i - 1)
      let curr = prev.next
      prev.next = node
      node.next = curr
    }
  
    ++this.count
    return true
  }
  return null
}

LinkedList.prototype.indexOf = function (e) {
  let cur = this.head
  let count = 0

  while (cur) {
    if (cur.element === e) {
      return count
    }
    cur = cur.next
    ++count
  }

  return -1
}

LinkedList.prototype.remove = function (e) {
  return this.removeAt(this.indexOf(e))
}

LinkedList.prototype.size = function () {
  return this.count
}

LinkedList.prototype.isEmpty = function () {
  return this.count === 0
}

LinkedList.prototype.getHead = function () {
  return this.head
}

LinkedList.prototype.toString = function () {
  if (this.count !== 0) {
    let cur = this.head
    let result
    while(cur) {
      if (!result) {
        result = cur.element
      } else {
        result = result + ' => ' + cur.element
      }
      cur = cur.next
    }
    return result
  }

  return ''
}
var a = new LinkedList()
a.push(10)
a.push(20)
a.push(30)
a.push(40)
a.push(50)
a.removeAt(2)
console.log(JSON.stringify(a))
console.log(a.indexOf(50)) // => 3
console.log(a.toString())
