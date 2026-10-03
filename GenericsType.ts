// function printString(value: string){
//   return value;
// }

// function printNumber(value:number) {
//   return value;
// }

function printValue<T>(value: T): T {
  return value;
}

const str = printValue<string>("Hello, World!");
const num = printValue<number>(42);

// console.log(`String: ${str} & Number: ${num}`);


function getData<T>(data: T): T {
  return data;
}

let username = getData<string>("John Doe");
let userAge = getData<number>(30);

// console.log(userAge);
// console.log(username);

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstEle = getFirstElement<string>(["React", "Angular", "Next.js"]);
// console.log(firstEle);


interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const response1: ApiResponse<object> = {
  success: true,
  data: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    pass: "123456"
  }
}

const response2: ApiResponse<{
  name: string;
  age: number;
}> = {
  success: true,
  data: {
    name: "John Doe",
    age: 30
  }
}

console.log(response1);
console.log(response2);
