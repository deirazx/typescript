type Result<T> = T extends string ? "String" : "Not String";

type CheckString<T> = T extends string ? "String" : "Not String";

type Result1 = CheckString<string>; // Result1 is "String"
type Result2 = CheckString<number>; // Result2 is "Not String"

const result: Result1 = "String"; // Valid assignment
// console.log(result); // Output: String


type IsAdmin<T> = T extends "admin" ? true : false;

type User1 = IsAdmin<"admin">; // User1 is true
type User2 = IsAdmin<"user">; // User2 is false



interface Admin {
  permision: "admin";
}

interface Emp{
  department: string;
}

type UserType<T> = T extends Admin ? "Admin User" : "Emp User"
type Result3 = UserType<Emp>; // Result3 is "Emp User"