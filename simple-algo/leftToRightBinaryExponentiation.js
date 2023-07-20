function leftToRightBinaryExponentiation(base, exponent) {
   let result = 1;
   let binaryExponent = exponent.toString(2);

   for (let i = 0; i < binaryExponent.length; i++) {
      result *= result;
      if (binaryExponent[i] === "1") {
         result *= base;
      }
   }

   return result;
}

const base1 = 4;
const exponent1 = 512;
const leftToRightResult1 = leftToRightBinaryExponentiation(base1, exponent1);
console.log("Left-to-Right Result:", leftToRightResult1);
