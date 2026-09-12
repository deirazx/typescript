let username: string = "Dheeraj"

type Username = string;
type Age = number;

let myname: Username = "Dheeraj";
// console.log(myname);

let userAge: Age = 27
// console.log(userAge);

type User = {
  username: string,
  age: number
}

let user1: User = {
  username: "Dheeraj",
  age: 90
}

type AddFuntion = (
  a: number,
  b: number
) => number

let add: AddFuntion = (x, y) => {
  return x + y
}

// console.log(add(10, 5))

type ID = string | number;
let userId: ID = 101;
userId = "Dheeraj"


type Person = {
  username: string
}

type Emp = {
  salary: number
}

type Staff = Person & Emp

let worker: Staff = {
  username: "Rohit",
  salary: 900
}