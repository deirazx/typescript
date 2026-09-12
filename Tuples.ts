let user: [string, number] = ["Dheeraj", 17];
// console.log(user);

let numbers: number[] = [1, 2, 3, 4, 5];
let employes: [string, number, boolean] = ["Mohit", 27, true]

console.log(employes[0]);

let [username, salary, isLogin] = employes;

// console.log(salary);


function getUser(): [string, number] {
  return ["Dheeraj", 25]
}
console.log(getUser())