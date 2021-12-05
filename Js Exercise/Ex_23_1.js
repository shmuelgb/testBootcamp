//!---1------>
//this is the window in browser. it refers to the object which called for it - the window object.

//!---2------>
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
//'hello undefined'. arrow functions dont have their own this, so their this refers to the closest non-arrow parent function, in this case there is no such fn so it refers to the window, where name is undefined.
//!---3------>
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();
//window. this is invoked in the window so its this is the window
//!---4------>
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow(); // window. myFuncArrow is inside the window.
//!---5------>
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
//window. "document.querySelector(".element")" is an obj, so if have used regular fn instead of arrow fn it have referred to that obj, but since we used arrow fn which dos'nt have its own this - it refers to window obj like in question 2
