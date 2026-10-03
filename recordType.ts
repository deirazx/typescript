// Record<key, valueType>

// type UserRole = {
//   admin: string;
//   user: string;
//   guest: string;
// }

type UserRole = Record<"admin" | "user" | "guest", string>;

const u1: UserRole = {
  admin: "Admin User",
  user: "Regular User",
  guest: "Guest User"
}

// console.log(u1);


type StudentMarks = Record<string, number>;
const student1: StudentMarks = {
  Math: 95,
  Science: 88,
  History: 76
}

// console.log(student1);

type User = {
  name: string;
  age: number;
};

type Users = Record<string, User>;
const users: Users = {
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
  user3: { name: "Charlie", age: 22 }
}

console.log(users);