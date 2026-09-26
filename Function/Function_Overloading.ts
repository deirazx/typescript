// function add (
//   a: number,
//   b: number
// )

// function add (
//   a: any,
//   b: any
// ){
//   return a+b
// }

// console.log(add(10,20));
// console.log("Hello", "Mohit");


function search(
  value: any
): string {
  if (typeof value === "number") {
    return `Search by id: ${value}`
  } else {
    return `Search by Name: ${value}`
  }
}

const result = search("Dheeraj kumar");
console.log(result);
