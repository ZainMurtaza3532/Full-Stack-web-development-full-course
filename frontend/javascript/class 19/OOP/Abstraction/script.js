class CoffeeMachine {
  constructor() {
    this._waterAmount = 0;
  }

  setWaterAmount(amount) {
    if (amount < 0) throw new Error("Water amount must be positive");
    this._waterAmount = amount;
  }

  makeCoffee() {
    console.log(`Making coffee with ${this._waterAmount}ml water ☕`);
  }
}

const machine = new CoffeeMachine();
machine.setWaterAmount(200);
machine.makeCoffee(); // Making coffee with 200ml water ☕
