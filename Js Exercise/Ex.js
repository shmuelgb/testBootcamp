function Car(brand, speed) {
  this.brand = brand;
  this.speed = speed;
}
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

[new Car("BMW", 120), new Car("Mercedes", 95)].forEach((car) => {
  car.accelerate();
  car.break();
  console.log(car);
});

class CarC {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
}
[new CarC("BMW", 120), new CarC("Mercedes", 95)].forEach((car) => {
  car.accelerate();
  car.break();
  console.log(car);
});
