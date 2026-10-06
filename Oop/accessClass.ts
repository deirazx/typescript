// class Userr {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const user3 = new Userr("Dheeraj");
// console.log(user3.name);


class BankAcc {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  showBalance() {
    console.log(`Balance: ${this.balance}`);
  }
}

const bankAcc = new BankAcc(1000);
// bankAcc.showBalance();
// console.log(bankAcc.balance); // Output: 1000
// console.log(bankAcc.balance); // Error: Property 'balance' is private and only accessible within class 'BankAcc'.


class Emp {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Emp {
  department: string;

  constructor(salary: number, department: string = "General") {
    super(salary);
    this.department = department;
  }
  showSalary() {
    console.log(`Salary is ${this.salary} & Department is ${this.department}`);
  }
}

const manager = new Manager(50000, "Sales");
manager.showSalary();