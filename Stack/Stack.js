function Stack() {
  let items = [...arguments];
  return {
    push: function(element) {
      items.push(element);
    },
    pop: function() {
      return items.pop();
    },
    peek: function() {
      return items[items.length - 1];
    },
    isEmpty: function() {
      return items.length === 0;
    },
    size: function () {
      return items.length;
    },
    clear: function(){
      items = [];
    },
    print: function() {
      console.log(items.toString());
    },
    toString: function(){
      return items.toString();
    },
    insertItems: function (i) {
      if (i) {
        items = [
          ...items,
          ...i
        ]
      }
    }
  }
}

module.exports = Stack
