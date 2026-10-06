import { company, greet } from "./user.js";
import { Employee } from "../src/employee.ts";
console.log(company);
console.log(greet("Dheeraj Kumar"));
const emp = new Employee("Dheeraj");
emp.showInfo();
