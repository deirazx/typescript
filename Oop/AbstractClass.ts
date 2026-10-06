abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): void;
}

// const dog = new Animal(); // Error: Cannot create an instance of an abstract class.

class Dog extends Animal {
  eat() {
    console.log(`${this.name} is eating`);
  }
}

const dog = new Dog("Buddy");
dog.eat(); // Output: Buddy is eating


abstract class Employee {
  constructor(public name: string) { }
  abstract calCulateSalary(): number
}

class Developer extends Employee {
  calCulateSalary(): number {
    return 50000;
  }
}

const dev = new Developer("John");
console.log(`${dev.name}'s salary is ${dev.calCulateSalary()}`); // Output: John's salary is 50000