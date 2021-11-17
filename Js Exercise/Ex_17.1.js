var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// result = 5. arguments ignored. b returned from other is 5 in its outer scope, the somefn scope.

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
// log a=1. hoisting takes function a to the top of b2 scope. so, when a=10 it refers to its own scope's a, not the parent a. and b2'a gets overides again by the function declaration.

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 0);
}
// '3, 3, 3'. bechase setTimeout is pullud out of the call stack and being returned only after 2 things: the timer is done, and the call stack is empty. in our case, the second thing only happens after the for loop is done and taken out the call stock.
