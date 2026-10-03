// let role: "admin" | "customer" | "partner"
// role = "admin"

// console.log(role);


type UserRole = "Admin" | "user" | "guest";

let role: UserRole = "guest"
console.log(role);


type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

let dice: DiceValue = 3;
// console.log(dice);


let isVerified: true;
isVerified = true;
// isVerified = false; // Error: Type 'false' is not assignable to type 'true'.

// console.log(isVerified);


function setTheme(theme: "light" | "dark") {
  console.log(`Theme set to ${theme}`);
}

setTheme("light");