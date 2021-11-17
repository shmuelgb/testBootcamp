var x = 10;
console.log(x);
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x, "\n"); //10 20 20

var x = 10;
console.log(x);
if (true) {
  (function () {
    var x = 20;
    console.log(x);
  })();
}
console.log(x, "\n"); // 10 20 10

var x = 10;
console.log(x);
function test() {
  var x = 20;
  console.log(x);
  if (x > 10) {
    let x = 30;
    console.log(x);
  }
  console.log(x);
}
test();
console.log(x, "\n"); // 10 20 30 20 10

var x;
x = 10;
function test2() {
  var x;
  if (x > 20) {
    x = 50;
  }
  console.log(x, "\n"); // undefined
}
test2();

function test3() {
  var x, y;
  if (false) {
    x = 50;
  }
  console.log(x);
  console.log(y);
  y = 100;
  console.log(y, "\n"); //undefined undefined 100
}
test3();

function test4() {
  foo();
  bar();
  // Function defiened
  // using function declaration
  function foo() {
    console.log("foo");
  }
  // Function defined
  // using function expression
  var bar = function () {
    console.log("bar");
  };
}
test4(); // function declaration ure fully hoisted so foo() = 'foo'. function expression here is a var, var histed as undefined, so: bar() = undefined() = error!. if the bar() call was written after the function expression it would have worked
