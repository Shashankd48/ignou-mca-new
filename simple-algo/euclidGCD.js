// function euclidGCD(a, b) {
//    if (b > a) [a, b] = [b, a];

//    while (b !== 0) [a, b] = [b, a % b];

//    return a;
// }

// // Example usage:
// let num1 = 48;
// let num2 = 18;
// let gcd = euclidGCD(num1, num2);
// console.log("GCD of", num1, "and", num2, "is:", gcd); // Output: GCD of 48 and 18 is: 6

const euclidGCD = (a, b) => {
   if (b > a) [a, b] = [b, a];

   while (b !== 0) [a, b] = [b, a % b];

   return a;
};

console.log(euclidGCD(48, 18));
