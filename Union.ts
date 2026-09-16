let id: string | number;
id = 101;
id = "Dheeraj"
// id = true

// console.log(id)


function printId(id: string|number){
  console.log(id)
}

// printId("Riyaa")


function printData(data: string | number){
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  }else{
    console.log("Number: ", data)
  }
}

printData("dheeraj")