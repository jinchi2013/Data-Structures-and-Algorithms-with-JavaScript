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

/*
  A little summary 
    - the result of an async function is always a Promise p. 
      That Promise is created when starting the exection of the async function
    - The body is executed. Execution may finish permanently via return ro throw.
      Or it may finish temporarily via await; in which case execution will usually continue later on.
    - The Promise p is returned.
*/

/*
  Async funcitons and callbacks
    - One limitation of async functions is that await only affects the directly surrounding async funciton
    - Therefore, an async function can't await in a call back
*/

// Array.prototype.map()
// In the following code, we want ot download the files pointed to by an Array of URLs and return them in an Array
async function downloadContent(urls) {
  // wrong syntax!!!
  return urls.map(url => {
    // This does not work, because await is syntactically illegal inside normal arrow functions
    const content = await httpGet(url);
    return content;
  });
  // what if we use an async arrow funciton
  return urls.map(async (url)=> {
    const content = await httpGet(url);
    return content;
  });
  /*
    Two issue of above
      - The result is now an Array of Promises, not an Array of strings
      - The work performed by the callbacks isn't finished once map() is finished
        Because await only pauses the surrounding arrow function and 
        httpGet() is resolved asynchronously. 
        That means you can’t use await to wait until downloadContent() is finished.
  */
}

// =====================================================================
// Try following in the babel ==========================================
// =====================================================================
var arr = [1,2,3];

function httpGet(url) {
  return new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve(url)
    }, 100)
  })
}

async function downloadContent(urls) {
    return urls.map(async (url) => httpGet(url));
}

async function testWrapper () {
  const arra = await downloadContent(arr)
  console.log(arra)
}

testWrapper() // this will return an array of promise, not the actual results
// to get the expected result update downloadContent return Promise.all(urls.map( url => httpGet(url) ))

// ===========================================================================
// end of try ================================================================
// ===========================================================================

// better way
async function downloadContent(urls) {
  // the following line is the same usage with line 49 -- Handling multiple asynchronous results sequentially:
  return await Promise.all( urls.map( url => httpGet(url) ) )
}

/*
  forEach, for-of loop, in parallel await the final result
*/ 
async function logContent(urls) {
    urls.forEach(async url => {
        const content = await httpGet(url);
        console.log(content);
    });
    /*
      Promise returned by httpGet() is resolved asynchronously, 
      which means that the callbacks are not finished when forEach() returns.
      As a consequence, you can’t await the end of logContent().
    */
}

// here is the for of loop version
async function logContent(urls) {
  for(const url of urls) {
    const content = await httpGet(url);
    console.log(content);
  }
}
// now everything is finished after the for-of loop. however the processing steps happen sequentially

// here is the parallel version
async function logContent(urls) {
  await Promise.all( 
    urls.map( 
      async url => {
        const content = await httpGet(url);
        console.log(content);
  }))
}
/*
  map() is used to create an Array of Promises. 
  We are not interested in the results they fulfill, 
  we only await until all of them are fulfilled
*/























