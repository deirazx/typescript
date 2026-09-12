// let statusCode = "Success";

enum Direction{
  up="East",
  down="West",
  left="North",
  right="South"
}

// console.log(Direction.down);

enum StatusCode {
  Success = 200,
  NotFound = 400,
  ServerError = 500
}
console.log(StatusCode.Success)

enum PaymentStatus {
  pending="Pending",
  success="Success",
  failed="Failed"
}

function checkPayment(status: PaymentStatus){
  console.log(status)
}
checkPayment(PaymentStatus.failed)