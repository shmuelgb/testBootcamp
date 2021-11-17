function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
console.log("!!!!!2:!!!!! \n");
// console.log(a) => undefined, bechose we usud var, so the decleration is hoisted but not the assinment.
// console.log(foo()); => 2. functions declertions are hoisted.

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
console.log("!!!!!3:!!!!! \n");
// console.log(obj.prop.getFullName()); ==> Aurelio De Rosa. bechose of this = prop, it refers prop.fullName.
// console.log(test()); ==> John Doe. bechose this is the window' where fullname is John Doe.

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
console.log("!!!!!4:!!!!! \n");
// onsole.log(typeof a); ==> undefined. usung let inside of funcB make a exist only inside of it. outside its undefined.
// console.log(typeof b); ==> number. even thogho b initalized inside of funcB, its declared globaly bechose there wes no let var or const.

function funcC() {
  console.log("1");
}
funcC(); //2. they'r both hoisted to the top of the file, and the second funcC overides the first.
function funcC() {
  console.log("2");
}
funcC(); //2. dido
console.log("!!!!!5:!!!!! \n");

function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // => 1. d exist outside bechase no var let or const.
function funcD2() {
  var e = 1;
}
funcD2();
//!console.log(e); //=> error. e never declared in global scope
console.log("!!!!!6:!!!!! \n");

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
//console.log("Value of f in global scope: ", f); ==> undefined. d exist bechase of var, but never initialized.
// funcE(); ==> 1. the function call is after f was assigned value 1/
