class Animal {
  speak() {
    console.log("This animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof woof!");
  }
}

const a = new Animal();
const d = new Dog();

a.speak(); // This animal makes a sound
d.speak(); // Woof woof!
