const storm = {
  superPower: "flying",
  f: printSuperPower,
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
storm.f();
