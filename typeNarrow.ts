let value: string | number = "Dheeraj";

value = "Rohit";
// value = 100;
// console.log(value.toUpperCase());

// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// } else {
//   console.log(value);
// }

function printVal(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// printVal("Hello");
// printVal(20949);

type Admin = {
  name: string;
  permission: string[]
}

type User = {
  name: string;
  email: string
}

function getInfo(person: Admin | User) {
  if ("permission" in person) {
    console.log("Admin User");

  } else {
    console.log("Normal User");

  }
}

// getInfo({
//   name: "Dheeraj",
//   permission: ["Create", "Delete"]
// })

// getInfo({
//   name: "Rahul",
//   email: "rahul0909@gmail.com"
// })


class Dog {
  bark() {
    console.log("Dog is barking");

  }
}

class Cat {
  meow() {
    console.log("Cat is meowing");

  }
}


function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}


makeSound(new Dog());
makeSound(new Cat());