// let add: (a: number, b: number) => number

function add(a: number, b: number) {
  console.log(a + b)
}

// add(10, 89);

function multiply(a: number, b: number) {
  return a * b;
}

// console.log(multiply(10,8))

let subtract: (
  x: number,
  y: number
) => number


subtract = (a, b) => {
  return a - b
}

// console.log(subtract(20, 5))


// function processData(callback: (value: number) => void){
//   callback(100)
// }

// processData((num) => {
//   console.log(num)
// })


function calculate(a: number, b: number,
  operator: (x: number, y: number) => number
) {
  return operator(a, b)
}

let result = calculate(10, 20, (x, y) => x + y);

console.log(result);