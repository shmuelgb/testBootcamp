let breaker = "========!!!!=======";
function printToN(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
printToN(5);
console.log(breaker);

function countX(n, t) {
  for (let i = 0; i < n; i += t) {
    console.log(i);
  }
}
countX(20, 2);
console.log(breaker);

function countEven(int) {
  let counter = 0;
  while (int > 1) {
    if ((int % 10) % 2 === 0) {
      counter++;
    }
    int = Math.floor(int / 10);
  }
  return counter;
}
console.log(countEven(1640));
console.log(breaker);

function countEvenOnRange(n) {
  let counter = 0;
  for (let i = 112; i < n; i += 2) {
    counter++;
  }
  return counter;
}
console.log(countEvenOnRange(117));
console.log(breaker);

function printReverse() {
  for (let i = 100; i > 0; i -= 2) {
    console.log(i);
  }
}
printReverse();
console.log(breaker);
