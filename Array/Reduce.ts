let price: number[] = [100,200,300];

let total = price.reduce(
  (sum, prices) => sum + prices,
  0
)
console.log(total);