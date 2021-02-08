// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const isPrime = number =>{
   for(let i = 2; i < number; i++)
      if(number % i === 0) return false
   return true
}

const primeNumberPosition = limit =>{
   let position = 0

   for(let i = 2; i > 0; i++){
      isPrime(i) && position++
      if(position == limit) return i
   }  
}

console.log(primeNumberPosition(10001))