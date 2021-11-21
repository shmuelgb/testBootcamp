function fibonacci(n) {
  let a;
  if (n < 3) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(5));
