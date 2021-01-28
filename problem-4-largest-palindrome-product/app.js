//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

const reverseString = (str) =>{
   let newStr = ""
   for (let i = str.length - 1; i >= 0; i--) { 
      newStr += str[i]
  }
  return newStr
}

const isPalindrome = number =>{
   number = "" + number
   let y

   const x = number.slice(0, (number.length / 2 + 1))
   number.length > 3 ?  y = number.slice(number.length / 2 - 1, number.length + 1) : y = number.slice(number.length / 2 , number.length + 1)

   return x == reverseString(y) ? true : false
}

const calculate = (limit) =>{
   let palindromeArray = []

   for(let i = limit; i > 1; i--) {
      for(let x = limit; x > 1; x--){
         isPalindrome(i * x) && palindromeArray.push(i * x)
      }
   }
   return Math.max(...palindromeArray)
}

console.log(calculate(999))