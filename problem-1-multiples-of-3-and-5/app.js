
const calculate = (limit) =>{
   let result = 0

   for(let i = 1; i < limit; i++){
      if(i % 3 === 0 || i % 5 === 0) result += i
   }

   return result
}

console.log(calculate(1000))
