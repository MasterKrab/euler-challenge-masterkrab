let x = 0
let y = 1
let sum = 0
let result = x + y
x = result

while(result <=  4000000){
   result = x + y
   if(result % 2 === 0) sum += result
   y = x
   x = result
}

console.log(`The sum is: ${sum}`)
