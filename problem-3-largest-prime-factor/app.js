//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

const isPrime = number =>{
   for(let i = 2; i < number; i++)
      if(number % i === 0) return false
   return true
}

const largestPrime = number =>{

   let prime = 2

   while(number !== 1){
      if(isPrime(prime) && number % prime === 0)
         number = number / prime
      else
         prime++
   }
   return prime
}

console.log(largestPrime(600851475143))
