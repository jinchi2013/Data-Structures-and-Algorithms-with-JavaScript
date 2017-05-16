/*
  Closure
  inner function that has access to the outer function's variables

  Scope chain
    -the scope chain of Closure
      - it has access to its own scope
      - it has access to the outer function's variables + outer function's parameters
      - it has access to the global variables
*/

/*
  A basic example of Closure in javascript
*/

var globalVal = 'globalVal'
(function outerFunction() {
  var outerVal = 'outerVal';

  function innerFunction() {
    var innerVal = 'innerVal'
    return `${globalVal} + ${outerVal} + ${innerVal}`
  }

  console.log(innerFunction())
}())

// what is the difference between above and below
// function outerFunction() {
//   var outerVal = 'outerVal';
//
//   function innerFunction() {
//     var innerVal = 'innerVal'
//     return `${globalVal} + ${outerVal} + ${innerVal}`
//   }
//
//   console.log(innerFunction())
// }

// What if the outer function is returned,
// the returned function will keep the state of the outer function
// Closures have access to the outer function’s variable even after the outer function returns
// (http://javascriptissexy.com/understand-javascript-closures-with-ease/)

(function() {
  function outerFunction(outerVal){
    return function innerFunction(innerVal) {
      console.log(`${outerVal} + ${innerVal}`)
    }
  }

  var test = outerFunction('outerVal')
  console.log(test('innerVal'))
}())

(function(){
  function outerFunction() {
    var outerVal= 'outerVal'
    function innerFunction() {
      console.log(outerVal)
    }
    outerVal = 'outerVal-2'
    return innerFunction
  }

  var test = outerFunction();
  console.log(test())
}())

// Closures store references to the outer function’s variables;
(function(){
  function outerFunction () {
    var outerVal = 'outerVal';
    return {
      innerFunction_1: function innerFunction_1(inneParam)  {
        return `${inneParam} + ${outerVal}`;
      },
      innerFunction_2: function innerFunction_2(newValue)  {
        outerVal = newValue;
      }
    }
  }

  var myOuter = outerFunction();
  console.log(myOuter.innerFunction_1('innerParam-1'));
  myOuter.innerFunction_2('newOuterVal');
  console.log(myOuter.innerFunction_1('innerParam-2'));
}())
