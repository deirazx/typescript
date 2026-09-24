function greet(username: string){
  console.log("Welcome to TS", username)
}

greet("Dheeraj kumar")

function add(a: number, b: number): number{
  return a+b
}

// console.log(add(10,20));

function test():number {
    return 100;
}

let result = test();
// console.log(result);

function greetUser(username: string = "user", gmail?: string){
  console.log(`Username: ${username} & gmail: ${gmail}`);
}

// greetUser("","deirazcodes")


const addNumber = (
  a: number,
  b: number
): number => {
  return a+b
}

const output = addNumber(10,20);
// console.log(output)

const square = (num: number): number => num * num;
const output2 = square(10);
console.log(output2)