// let username = "Dheeraj";

// console.log(typeof username);


let course = "Ts";
course = "JS";
// course = 100
console.log(course)

function add(a:number, b: number) {
  return a+b
}
console.log(typeof add(10,5));

function greet(data: unknown) {
  if (typeof data === "string") return `String: ${name}`
  if (typeof data !== "string") {
    return `Number: ${data}`
  }
}

// console.log(greet("Dheeraj"))