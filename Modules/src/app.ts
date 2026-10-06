import { company, greet } from "../dist/user";
import { Employee } from "./employee.ts"

console.log(company);
console.log(greet("Dheeraj Kumar"));

const emp = new Employee("Dheeraj");
emp.showInfo();