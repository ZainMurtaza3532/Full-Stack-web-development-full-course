class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // private-like property
  }

  deposit(amount) {
    this._balance += amount;
    console.log(`Deposited ${amount}, New Balance: ${this._balance}`);
  }

  getBalance() {
    return this._balance;
  }
}

const acc = new BankAccount("Ali", 1000);
acc.deposit(500); // Deposited 500, New Balance: 1500
console.log(acc.getBalance()); // 1500
