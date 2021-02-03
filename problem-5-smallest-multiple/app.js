//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMultiple = limit =>{
   
   let count = 0

   for(let j = 1; j > 0; j++){

      count = 0

      for(let i = 1; i <= limit; i++){
         j % i == 0 && count++
         if(count == limit) return j
      }
   }

}

console.log(smallestMultiple(20))