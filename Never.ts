// function throwError(message: string): never{
//   throw new Error(message);
// }

// throwError("404 Error")


function infinityLoop():never {
  while(true){
    console.log("Running....")
  }
}
infinityLoop()