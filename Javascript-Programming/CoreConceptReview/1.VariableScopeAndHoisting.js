/*
  We are in the global scope
*/
var val1 = 'CJ'; // this is globalVar1

function showGlobalVar() {
  var val1 = 'Calvin'; // this is localVar1
  console.log(val1)
}

console.log(val1) //
showGlobalVar() //

function withOutDeclared() {
  val2 = 'Cal'; // use a variable in the function without declaration, it is global then
  console.log(val2);
}
console.log(val2); //
withOutDeclared();//

// the setTimeout issue
​var val3 = 200;
​var val4 = 2;
​var obj1 = {
	val3: 20,
	val4: 5,
	doMath: function () {
    setTimeout (function  () {
    	console.log(this.val1 * this.val2);
    }, 2000);
	}
}

obj.doMath() //

// variable hoisting
// function hoisting
var val4 = 'globel';
(function() {
  console.log(val4);
  console.log(showVal4())
  var val4 = 'local';
  function showVal4(){
    console.log(val4)
  }
}())

(function(){

  var val5 = 'cj'
  function val5 () {
    console.log('cj')
  }
  console.log(typeof val5)

  var val6;
  function val6() {
    console.log('val6')
  }
  console.log(typeof val6)
}())
