function addOrSubtract(num1, num2, operation) {
  let num3 = 4
  return operation(num1, num2, num3)
}

console.log(addOrSubtract(1,2,(num1,num2) => num1 + num2))

console.log(addOrSubtract(1,2,(num3,num4) => num3 - num4))