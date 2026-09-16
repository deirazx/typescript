type Person = {
  username: number
}

type Emp = {
  salary: number
}

type staff = Person & Emp


type User = {
  username: string;
}

type Admin = {
  permission: string[]
}

type AdminUser = User & Admin

let admin: AdminUser = {
  username: "Dheeraj kumar",
  permission: ["read", "write"]
}

console.log(admin);



interface Person{
  username: string
}

interface Emp{
  salary: number
}

type Staff = Person & Emp;

let worker: Staff = {
  username: "Dheeraj",
  salary: 900
}

console.log(Staff);
