const Person = {
  name: "sam",
  printName: function () {
    console.log(this.name);
  },
  printNameDelayed: function () {
    setTimeout(this.printName.bind(this), 1000);
  },
};
Person.printNameDelayed();
