// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// class Dog extends Animal{
//   bark() {
//     console.log("Woff Woof");
//   }
// }

// const dog = new Dog("Buddy");
// dog.eat(); // Output: Buddy is eating.
// dog.bark(); // Output: Woff Woof

// class Animal {
//   constructor(
//     public name: string
//   ) { }
// }

// class Dog extends Animal {
//   constructor(name: string, public breed: string) {
//     super(name);
//   }
// }

// const dog = new Dog("Buddy", "Golden Retriever");
// console.log(dog);
// console.log(dog.name);
// console.log(dog.breed);


class Emp {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Dev extends Emp {
  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

const dev = new Dev(50000);
dev.showSalary(); // Output: Salary: 50000