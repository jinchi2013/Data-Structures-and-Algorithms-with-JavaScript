/*
  Test each block in babel
*/

(function(){
  function* genFunc() {
    // (A)
    console.log('First');
    yield;
    console.log('Second');
  }

  const genObj = genFunc();

  genObj.next();
  // Output: First
  genObj.next();
  // output: Second
}())

/*
  function* is a markup for generator
  it will return a generator object
  directly call on function* expression doesn't work well
*/

/*
  Use case: implementing iterables
*/
(function(){
  function* objectEntries(obj) {
      const propKeys = Object.keys(obj);

      for (const propKey of propKeys) {
          // `yield` returns a value and then pauses
          // the generator. Later, execution continues
          // where it was previously paused.
          yield [propKey, obj[propKey]];
      }
  }
  const jane = { first: 'Jane', last: 'Doe' };
  for (const [key,value] of objectEntries(jane)) { // generator objects are iterable
      console.log(`${key}: ${value}`);
  }
}())

/*
  Use case: simpler asynchronous code
*/
(function(){
  function fetchJson(url) {
    return fetch(url)
    .then(request => request.text())
    .then(text => {
        return JSON.parse(text);
    })
    .catch(error => {
        console.log(`ERROR: ${error.stack}`);
    });
  }

  const fetchJson = co.wrap(function* (url) {
      try {
          let request = yield fetch(url);
          let text = yield request.text();
          return JSON.parse(text);
      }
      catch (error) {
          console.log(`ERROR: ${error.stack}`);
      }
  });
}())
/*
  Find in async-await-function.js ECMAScript 2017 will have async functions which are internally based on generators
*/

// Return from a generator
(function(){
  function* test(){
    yield console.log('a');
    yield console.log('b');
    return console.log('done');
  }
// directly call on function* expression doesn't work well 
  const test1 = test()

  test1.next()
  test1.next()
  test1.next()
}())
