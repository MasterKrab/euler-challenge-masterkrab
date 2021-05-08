//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagoreanTripletProduct = product => {
    for(let i = 1; i < product; i++){
        for(let j = 1; j < product; j++){
            const thirdNumber = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))
            if(i < j < thirdNumber && i + j + thirdNumber === product) return i * j * thirdNumber;
        }
    }
};

console.log(pythagoreanTripletProduct(1000));