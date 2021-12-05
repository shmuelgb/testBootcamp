function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
let s1 = new Square(1, 1, 1, 1);
Square.prototype.isSquare = function () {
  return this.a === this.b && this.b === this.c && this.c === this.d
    ? true
    : false;
};
console.log(s1.isSquare());
