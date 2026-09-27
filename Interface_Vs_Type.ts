// type User = {
//   userName: string,
//   age: number
// }

// enum Role {
//   Admin = "admin",
//   Customer = "customer"
// }

// type Admin = User & {
//   role: Role
// }

// let user1: User = {
//   userName: "Dheeraj",
//   age: 17
// }

// let user2: User = {
//   userName: "Rohit",
//   age: 22
// }

// let user3: User = {
//   userName: "Riya",
//   age: 23
// }

// console.log(user1.userName);
// console.log(user2.userName);
// console.log(user3.userName);



//! InterFace

interface Product {
  title: string,
  price: number
}

let laptop: Product = {
  title: "Macbook",
  price: 90000
}

console.log(`Title: ${laptop.title} & price: ${laptop.price}`);


interface User {
  userName: string
}

interface Admin extends User {
  role: 'admin' | 'customer'
}

let adm1: Admin = {
  userName: "Dheeraj",
  role: "admin"
}

console.log(adm1);