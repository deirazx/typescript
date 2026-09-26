// type Multiple = {
//   (
//     x: number,
//     y: number
//   ): number;
// }

// let multiplyNumber: Multiple = (a, b) => {
//   return a * b
// }
// console.log(multiplyNumber(10, 5));


interface Multiple {
  (
    x: number,
    y: number
  ): number;
}

let multiplyNumber: Multiple = (a, b) => {
  return a * b
}
console.log(multiplyNumber(10, 5));