/*
  Async funcitons always return Promises
*/
async function asyncFunc() {
  return 123
}

asyncFunc()
  .then( x => console.log(x))
  .catch(err => console.log(err))

/**
  Handling results and errors of asynchronous computations via await
*/

/* the operator await is only allowed inside async function
   it waits for its operand, a Promise, to be settled:
    - if the Promise fulfilled, the result of await is the fulfillment value
    - if the Promise is rejected, await throws the rejection value
*/

// Handleing a single asynchronous result:
async function WrapperForAsyncFunc() {
  const result = await AsyncFunction();
  console.log(result);
}
// Equivalent to:
function WrapperForAsyncFunc() {
  return AsyncFunction().then( result => console.log(result) )
}

// Handling multiple asynchronous results sequentially:
async function wrapperForAsyncFunc() {
  const result1 = await AsyncFunction1();
  console.log(result1);
  const result2 = await AsyncFunction2();
  console.log(result2);
}

function wrapperForAsyncFunc() {
  return AsyncFunction1().then(result1 => {
    console.log(result1)
    return AsyncFunction2()
  }).then( result2 => {
    console.log(result2)
  } )
}

// Handling multiple asynchronous results in parallel
async function wrapperForAsyncFunc(){
  const [result1, result2] = await Promise.all([
    AsyncFunction1(),
    AsyncFunction2()
  ]);
  console.log(result1, result2)
}

function wrapperForAsyncFunc() {
  return Promise.all([
    AsyncFunction1(),
    AsyncFunction2()
  ])
  .then([result1, result2] => {
    console.log(result1, result2);
  })
}

/*
  Use fetch as example
*/
async function fetchJson(url) {
  try {
      let response = await fetch(url);
      let text = await request.text();
      return JSON.parse(text);
  } catch (e) {
      console.log(`ERROR: ${e.stack}`)
  }
}
