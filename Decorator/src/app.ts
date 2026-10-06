// function Logger(target: Function){
//   console.log("Class Created");
//   console.log(target.name);
  
// }


// @Logger
// class User {
//   constructor(){
//     console.log("User const");
    
//   }
// }

// const user = new User();


// function LogMethod(target: any, propertyKey: string, description: PropertyDescriptor){
//   console.log(`Method: ${propertyKey}`);
// }

// class User{
//   @LogMethod
//   login(){
//     console.log("Login");

//   }
// }


// function LogProperty(target: any, propertyKey: string){
//   console.log(`Property: ${propertyKey}`);
// }

// class User {
//   @LogProperty
//   name = "Dheeraj"
// }


function LogParameter(target:any, methodName: string, parameterIndex: number) {
  console.log(`Parameter Index: ${parameterIndex}`);
}

class User{
  login(
    @LogParameter
    username: string
  ){

  }
}