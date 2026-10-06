// namespace App {
//   export function greet(){
//     console.log("Welcome to Dheeraj");
//   }
// }

// App.greet();


namespace User{
  export const company = "Google";
  export function login(){
    console.log("User logged In");
  }
  export class Emp{
    name: string;
    isActive: boolean;
    constructor(name: string, isActive: boolean){
      this.name = name;
      this.isActive = isActive;
    }
    show(){
      console.log(this.name);
    }
  }
}

console.log(User.company);
User.login();
const emp = new User.Emp("Dheeraj",true);
emp.show()