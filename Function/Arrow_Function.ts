const greet = (name: string) => {
  console.log("Hello", name);
}

// greet("Dheeraj");

const add = (
  a: number,
  b: number
): number => {
  return a + b
}

// console.log(add(10,20));

const square = (num: number) => num * num;
// console.log(square(10));

let nums = [1,2,3,4];

let double = nums.map(num => num>2);
console.log(double);