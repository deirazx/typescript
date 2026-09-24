function addNumber(...num: number[]) {
  console.log(num)
}
// addNumber(10,20,30,40)

function total(...price: number[]): number {
  return price.reduce(
    (sum, price) => sum + price
    , 0)

}
// console.log(total(100, 200, 300))


// let num1 = [1,2,3,4,5,6,7,8];
// let num2 = [...num1];

let num1 = [10,34,56,78];
let num2 = [98, 23, 97, 90];

let result = [...num1, ...num2]
// console.log(result)


let user = {
  name: "Dheeraj",
  age: 20
}

let updatedUser = {
  ...user,
  city: "Delhi"
}

console.log(updatedUser)