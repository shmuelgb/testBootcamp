function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);
//findSmallest misspeld. found it when used debugging tool and saw its not even getting into the fnc so understood that there is a problem with the fn call.
