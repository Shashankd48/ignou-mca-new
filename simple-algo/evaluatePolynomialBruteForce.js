function evaluatePolynomialBruteForce(coefficients, x) {
   let result = 0;
   const n = coefficients.length;

   for (let i = 0; i < n; i++) {
      result += coefficients[i] * Math.pow(x, n - 1 - i);
   }

   return result;
}

const coefficients = [4, 5, 3, 2];
const x = 2;

console.log(evaluatePolynomialBruteForce(coefficients, x));
