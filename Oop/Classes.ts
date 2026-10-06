// class User {
//   name = "Mohit";
// }

// const user = new User();
// console.log(user.name);


// class User{
//   name: string;
//   age: number;
// }

// const user = new User();
// user.name = "Dheeraj";
// user.age = 25;
// console.log(user);

// class User{
//   name: string;
//   age: number;

//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }
// }

// const user = new User("Dheeraj", 17);
// const user2 = new User("Riya", 22);
// console.log(user.name);
// console.log(user.age);
// console.log()
// console.log(user2.name);
// console.log(user2.age);


class User{
  constructor(
    public name: string,
    public age: number
  ){}
}

const user = new User("Dheeraj", 17);
const user2 = new User("Riya", 22);
console.log(user.name);