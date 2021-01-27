
const calculateFibbonaci = limit =>{
   let x = 0
   let y = 1
   let sum = 0
   let result = x + y
   x = result
   
   while(result <= limit){
      result = x + y
      if(result % 2 === 0) sum += result
      y = x
      x = result
   }
   return `The sum is: ${sum}`
}

console.log(calculateFibbonaci(4000000))

