function exponent(base, result) {
  if (base === result) return 1;
  return exponent(base, result / base) + 1;
}
console.log(exponent(4, 64));
