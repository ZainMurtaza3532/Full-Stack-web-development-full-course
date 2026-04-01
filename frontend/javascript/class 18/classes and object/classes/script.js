// Defining a class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving...`);
  }
}

// Creating objects (instances)
const car1 = new Car("Toyota", "Corolla", 2022);
const car2 = new Car("Honda", "Civic", 2023);

car1.start(); // Toyota Corolla is starting...
car2.drive(); // Honda Civic is driving...
