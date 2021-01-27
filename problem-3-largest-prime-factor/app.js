
const isPrime = value =>{
   for(let i = 2; i < value; i++){
      if(value % i !== 0) {
         return true
     }  
   }
}

const largestPrime = number =>{
   for(let i = number - 1; i > 0; i--){
      if(number % i === 0 && i !== number)
         if(isPrime(i)) return i
   }
}

console.log(largestPrime(600851475143))
