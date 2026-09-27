let user: {
  userName: string,
  age: number
}

user = {
  userName: "Dheeraj",
  age: 28
}

// console.log(user.userName);

// let products: {
//   readonly productName: string,
//   price?: number
// }

let products = {
  productName: "Laptop",
  price: 5000,
  address: {
    city: "Delhi",
    pincode: 10393,
    phoneNo: 8738674643
  }
}

products.price = 4500;
console.log(products.address.phoneNo);
